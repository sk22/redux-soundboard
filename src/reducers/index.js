import {combineReducers} from 'redux'
import soundboards from './soundboards'
import sounds from './sounds'
import current from './current'

// Each reducer handles actions specified by the object's keys
export default combineReducers({
  soundboards,
  sounds,
  current
})
