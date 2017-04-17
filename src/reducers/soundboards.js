import {createReducer} from 'redux-act'
import {getHighestKey} from './util'
import omit from 'lodash.omit'

import {
  addSoundboard,
  deleteSoundboard,
  updateSoundboard,
  addSoundToSoundboard
} from '../actions'

const soundboardTemplate = {
  name: 'Unnamed',
  sounds: [],
  locked: false
}

const initialState = {
  0: {...soundboardTemplate, name: 'Default'}
}

export default createReducer({
  [addSoundboard]: (state, soundboard) => ({
    ...state,
    [getHighestKey(state) + 1 || 0]: {...soundboardTemplate, ...soundboard}
  }),

  [deleteSoundboard]: (state, key) => omit(state, key),

  [addSoundToSoundboard]: (state, {sound, soundboard}) => ({
    ...state,
    [soundboard]: {
      ...state[soundboard],
      sounds: [...state[soundboard].sounds, sound]
    }
  }),

  [updateSoundboard]: (state, {soundboard, update}) => ({
    ...state,
    [soundboard]: {...state[soundboard], ...update}
  })
}, initialState)
