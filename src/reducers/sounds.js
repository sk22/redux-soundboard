import {createReducer} from 'redux-act'
import md5 from 'md5'
import omit from 'lodash.omit'

import {addSound, deleteSound} from '../actions'

const initialState = {
  [md5('/beep.mp3')]: {name: 'Beep', src: process.env.PUBLIC_URL + '/beep.mp3'}
}

export default createReducer({
  [addSound]: (state, sound) => ({
    ...state,
    [md5(sound.src)]: sound
  }),

  [deleteSound]: (state, key) => omit(state, key)
}, initialState)
