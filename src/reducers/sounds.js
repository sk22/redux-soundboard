import {createReducer} from 'redux-act'
import {getHighestKey} from './util'
import omit from 'lodash.omit'

import {addSound, deleteSound} from '../actions'

const initialState = {
  0: {name: 'Beep', src: '/beep.mp3'}
}

export default createReducer({
  [addSound]: (state, sound) => ({
    ...state,
    [getHighestKey(state) + 1 || 0]: sound
  }),

  [deleteSound]: (state, key) => omit(state, key)
}, initialState)
