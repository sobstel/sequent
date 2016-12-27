
import { combineReducers } from 'redux'

import chips from './chips'
import game from './game'
import level from './level'
import routes from './routes'

export default combineReducers({
  chips,
  game,
  level,
  routes
})
