
import { ActionConst } from 'react-native-router-flux'

const levels = [4, 8, 12, 16]

const initialState = {
  started: false,
  startedAt: null,
  endedAt: null,
  won: null,
  level: levels[0],
  chips: generateChips(levels[levels.length - 1], false)
}

function generateChips (n, random = true) {
  let chips = []
  let i

  for (i = 0; i < 16; i++) {
    const number = (i < n ? i + 1 : null)
    chips.push({ id: i, number: number, status: null, disabled: true })
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

  chips.filter((chip) => chip.number !== null).map((chip) => { chip.disabled = false; return chip })
  chips.filter((chip) => chip.number == null).map((chip) => { chip.status = 'idle'; return chip })
  chips.find((chip) => chip.number === 1).status = 'highlighted'

  return {
    ...state,
    started: true,
    startedAt: now,
    endedAt: null,
    chips: chips
  }
}

function stopGame (state) {
  return {
    ...state,
    started: false,
    startedAt: null,
    endedAt: null
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

      if (chip.number === 1) {
        return {
          ...state,
          chips: state.chips.map((chip) => {
            if (chip.number !== null && chip.number !== 1) {
              chip.status = 'hidden'
            }
            return chip
          })
        }
      }

      return {
        ...state,
        chips: [ ...state.chips.slice(0, action.id), chip, ...state.chips.slice(action.id + 1) ]
      }
  }

  return state
}
