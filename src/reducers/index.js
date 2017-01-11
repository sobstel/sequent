
import { AsyncStorage } from 'react-native'
import { combineReducers } from 'redux'
import * as asyncInitialState from 'redux-async-initial-state'

import game from './game'
import routes from './routes'

export const reducers = asyncInitialState.outerReducer(
  combineReducers({ game, routes })
)

const loadInitialStateFromStorage = (state) => {
  return AsyncStorage.multiGet(['@Sequent:hiscore', '@Sequent:level']).then((stores) => {
    let restored_state = { ...state }

    const hiscore = JSON.parse(stores[0][1])
    if (hiscore !== null) {
      restored_state = { ...restored_state, game: { ...restored_state.game, hiscore: hiscore } }
    }

    const level = JSON.parse(stores[1][1])
    if (level !== null) {
      restored_state = { ...restored_state, game: { ...restored_state.game, level: level } }
    }

    return restored_state
  })
}

export const storeMiddleware = asyncInitialState.middleware(loadInitialStateFromStorage)
