
import { AsyncStorage } from 'react-native'
import { ActionConst } from 'react-native-router-flux'
import { knuthShuffle } from 'knuth-shuffle'

import { levels } from '../lib/settings'

const initialState = {
  started: false,
  startedAt: null,
  endedAt: null,
  won: null,
  level: levels[0],
  chips: generateChips(levels[levels.length - 1], false),
  seq: null,
  hiscore: levels.reduce((state, level) => {
    state[level] = []
    return state
  }, {})
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_LEVEL':
      const currentIndex = levels.indexOf(state.level)

      let nextIndex = currentIndex + 1
      if (nextIndex >= levels.length) {
        nextIndex = 0
      }

      return { ...game.stop(state, action), level: levels[nextIndex] }

    case 'TOGGLE_GAME':
      return (state.started ? game.stop(state, action) : game.start(state, action))

    case 'STOP_GAME':
    case ActionConst.FOCUS:
      return game.stop(state, action)

    case 'PICK_CHIP':
      let chip = state.chips[action.id]

      if (chip.number !== state.seq) {
        return game.invalidChip(state, action, chip)
      }

      if (chip.number === 1) {
        return game.firstChip(state, action, chip)
      }

      if (chip.number === state.level) {
        return game.win(state, action, chip)
      }

      if (chip.number === state.seq) {
        return game.validChip(state, action, chip)
      }
  }

  return state
}

function generateChips (n, random = true) {
  let chips = []
  let i

  for (i = 0; i < 16; i++) {
    const number = (i < n ? i + 1 : null)
    chips.push({ id: i, number: number, status: 'disabled' })
  }

  if (random) {
    chips = knuthShuffle(chips)

    // re-index after random sorting
    for (i = 0; i < 16; i++) {
      chips[i].id = i
    }
  }

  return chips
}

const game = {
  start: (state, action) => {
    const chips = generateChips(state.level, true)

    chips
      .filter((chip) => chip.number !== null)
      .map((chip) => {
        chip.status = 'disabled'
        return chip
      })

    chips
      .filter((chip) => chip.number == null)
      .map((chip) => {
        chip.status = 'idle'
        return chip
      })

    chips.find((chip) => chip.number === 1).status = 'highlighted'

    return {
      ...state,
      started: true,
      startedAt: action.now,
      endedAt: null,
      won: null,
      chips: chips,
      seq: 1
    }
  },

  stop: (state, action) => {
    return {
      ...state,
      started: false,
      startedAt: null,
      endedAt: null,
      won: null,
      chips: generateChips(levels[levels.length - 1], false),
      seq: null
    }
  },

  firstChip: (state, action, chip) => {
    return {
      ...state,
      chips: state.chips.map((chip) => {
        if (chip.number === 1) {
          chip.status = 'valid'
        } else if (chip.number !== null) {
          chip.status = 'hidden'
        }
        return chip
      }),
      seq: state.seq + 1
    }
  },

  win: (state, action, chip) => {
    chip.status = 'valid'

    const item = { date: action.now, result: action.now - state.startedAt }
    const hiscore = state.hiscore
    hiscore[state.level] = hiscore[state.level].concat(item).sort((a, b) => { return a.result - b.result }).slice(0, 50)

    AsyncStorage.setItem('@Sequent:hiscore', JSON.stringify(hiscore))

    return {
      ...state,
      started: false,
      endedAt: action.now,
      won: true,
      chips: [ ...state.chips.slice(0, action.id), chip, ...state.chips.slice(action.id + 1) ],
      seq: null,
      hiscore: hiscore
    }
  },

  validChip: (state, action, chip) => {
    chip.status = 'valid'

    return {
      ...state,
      chips: [ ...state.chips.slice(0, action.id), chip, ...state.chips.slice(action.id + 1) ],
      seq: state.seq + 1
    }
  },

  invalidChip: (state, action, chip) => {
    chip.status = 'invalid'
    let chips = [ ...state.chips.slice(0, action.id), chip, ...state.chips.slice(action.id + 1) ]

    chips = chips.map((chip) => {
      if (chip.status === 'hidden') {
        chip.status = 'disabled'
      }
      return chip
    })

    return {
      ...state,
      started: false,
      endedAt: action.now,
      won: false,
      chips: chips,
      seq: null
    }
  }
}
