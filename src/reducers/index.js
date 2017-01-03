
import { AsyncStorage } from 'react-native'
import { combineReducers } from 'redux'
import * as asyncInitialState from 'redux-async-initial-state'

import game from './game'
import routes from './routes'

export const reducers = asyncInitialState.outerReducer(
  combineReducers({ game, routes })
)

const loadInitialStateFromStorage = (state) => {
  return AsyncStorage.getItem('@Sequent:hiscore')
    .then((result) => {
      const hiscore = JSON.parse(result)
      if (hiscore !== null) {
        return { ...state, game: { ...state.game, hiscore: hiscore } }
      }
    })
}

export const storeMiddleware = asyncInitialState.middleware(loadInitialStateFromStorage)
