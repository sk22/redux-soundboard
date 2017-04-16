import {combineReducers} from 'redux'
import soundboards from './soundboards'

// Can be removed later.
// const initialState = {
//   currentSoundboard: 0,
//   currentView: 'soundboards',
//   soundboards: {
//     0: {...soundboardTemplate, name: 'Default'}
//   },
//   sounds: {0: {name: 'Beep', src: '/beep.mp3'}}
// }

// Each reducer handles actions specified by the object's keys
export default combineReducers({
  soundboards
})
