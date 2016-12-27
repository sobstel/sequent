
import { ActionConst } from 'react-native-router-flux'

const initialState = {
  started: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, started: true }

    case 'STOP_GAME':
      return { ...state, started: false }

    case ActionConst.FOCUS:
      return { ...state, started: false }
  }

  return state
}
