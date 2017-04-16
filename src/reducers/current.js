import {createReducer} from 'redux-act'

import {setCurrentSoundboard, setCurrentView} from '../actions'

const initialState = {
  soundboard: 0,
  view: 'soundboards'
}

export default createReducer({
  [setCurrentSoundboard]: (state, soundboard) => ({...state, soundboard}),
  [setCurrentView]: (state, view) => ({...state, view})
}, initialState)
