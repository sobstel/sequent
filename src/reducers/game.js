
import { ActionConst } from 'react-native-router-flux'

const levels = [4, 8, 12, 16]

const initialState = {
  started: false,
  startedAt: null,
  endedAt: null,
  won: null,
  level: levels[0],
  chips: prepareChips(levels[levels.length - 1], false)
}

function prepareChips(n, random = true) {
  let chips = []

  for (var i = 0; i < n; i++) {
    chips.push({
      id: i,
      number: i + 1
    })
  }

  if (random) {
    chips = chips.sort(() => Math.random() - 0.5)
  }

  return chips
}

function startGame (state, now) {
  return {
    ...state,
    started: true,
    startedAt: now,
    endedAt: null,
    chips: prepareChips(state.level, true)
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

      return {...stopGame(state), level: levels[nextIndex] }

    case 'TOGGLE_GAME':
      return (state.started ? stopGame(state) : startGame(state, action.now))

    case 'END_GAME':
      return {
        ...state,
        started: false,
        endedAt: action.now
      }

    case 'STOP_GAME':
      return stopGame(state)

    case ActionConst.FOCUS:
      return stopGame(state)
  }

  return state
}
