
import { ActionConst } from 'react-native-router-flux'

const initialState = {
  started: false,
  startedAt: null,
  endedAt: null,
  won: null // true|false
}

function startGame (state) {
  return {
    ...state,
    started: true,
    startedAt: Date.now(),
    endedAt: null
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
    case 'START_GAME':
      return startGame(state)

    case 'STOP_GAME':
    case 'CHANGE_LEVEL':
    case ActionConst.FOCUS:
      return stopGame(state)

    case 'TOGGLE_GAME':
      return (state.started ? stopGame(state) : startGame(state))

    case 'END_GAME':
      return {
        ...state,
        started: false,
        endedAt: Date.now()
      }
  }

  return state
}
