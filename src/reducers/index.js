import {combineReducers} from 'redux'
import soundboards from './soundboards'
import sounds from './sounds'
import current from './current'

// Can be removed later.
// const initialState = {
//   current: {soundboard: 0, view: 'soundboards'},
//   soundboards: {
//     0: {...soundboardTemplate, name: 'Default'}
//   },
//   sounds: {0: {name: 'Beep', src: '/beep.mp3'}}
// }

// Each reducer handles actions specified by the object's keys
export default combineReducers({
  soundboards,
  sounds,
  current
})
