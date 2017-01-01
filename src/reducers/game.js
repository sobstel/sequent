
import { ActionConst } from 'react-native-router-flux'

const levels = [4, 8, 12, 16]

const initialState = {
  started: false,
  startedAt: null,
  endedAt: null,
  won: null,
  level: levels[0],
  chips: generateChips(levels[levels.length - 1], false),
  seq: null
}

function generateChips (n, random = true) {
  let chips = []
  let i

  for (i = 0; i < 16; i++) {
    const number = (i < n ? i + 1 : null)
    chips.push({ id: i, number: number, status: 'disabled' })
  }

  if (random) {
    chips = chips.sort(() => Math.random() - 0.5)

    // re-index after random sorting
    for (i = 0; i < 16; i++) {
      chips[i].id = i
    }
  }

  return chips
}

function startGame (state, now) {
  const chips = generateChips(state.level, true)

  chips.filter((chip) => chip.number !== null).map((chip) => { chip.status = 'disabled'; return chip })
  chips.filter((chip) => chip.number == null).map((chip) => { chip.status = 'idle'; return chip })
  chips.find((chip) => chip.number === 1).status = 'highlighted'

  return {
    ...state,
    started: true,
    startedAt: now,
    endedAt: null,
    chips: chips,
    seq: 1
  }
}

function stopGame (state) {
  return {
    ...state,
    started: false,
    startedAt: null,
    endedAt: null,
    chips: generateChips(levels[levels.length - 1], false),
    seq: null
  }
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_LEVEL':
      const currentIndex = levels.indexOf(state.level)

      let nextIndex = currentIndex + 1
      if (nextIndex >= levels.length) {
        nextIndex = 0
      }

      return { ...stopGame(state), level: levels[nextIndex] }

    case 'TOGGLE_GAME':
      return (state.started ? stopGame(state) : startGame(state, action.now))

    case 'STOP_GAME':
    case ActionConst.FOCUS:
      return stopGame(state)

    case 'PICK_CHIP':
      let chip = state.chips[action.id]
      let seq = state.seq + 1

      if (chip.number === 1) {
        return {
          ...state,
          chips: state.chips.map((chip) => {
            if (chip.number === 1) {
              chip.status = 'correct'
            } else if (chip.number !== null) {
              chip.status = 'hidden'
            }
            return chip
          }),
          seq: seq
        }
      }

      if (chip.number === state.seq) {
        chip.status = 'correct'

        if (chip.number === state.level) {
          return {
            ...state,
            started: false,
            endedAt: Date.now(),
            won: true,
            chips: [ ...state.chips.slice(0, action.id), chip, ...state.chips.slice(action.id + 1) ],
            seq: null
          }
        }

      } else {
        chip.status = 'incorrect'

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
          endedAt: Date.now(),
          won: false,
          chips: chips,
          seq: seq
        }
      }

      return {
        ...state,
        chips: [ ...state.chips.slice(0, action.id), chip, ...state.chips.slice(action.id + 1) ],
        seq: seq
      }
  }

  return state
}
