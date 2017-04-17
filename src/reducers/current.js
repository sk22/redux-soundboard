import {createReducer} from 'redux-act'

import {
  setCurrentSoundboard,
  setCurrentView,
  setShowShare,
  setShowImport,
  setShareUrl,
  resetShare,
  setImporting
} from '../actions'

const initialShareState = {
  showShare: false,
  showImport: false,
  url: null,
  importing: false
}

const initialState = {
  soundboard: 0,
  view: 'soundboards',
  ...initialShareState
}

export default createReducer({
  [setCurrentSoundboard]: (state, soundboard) => ({...state, soundboard}),
  [setCurrentView]: (state, view) => ({...state, view}),
  [setShowShare]: (state, showShare) => ({...state, showShare}),
  [setShowImport]: (state, showImport) => ({...state, showImport}),
  [setShareUrl]: (state, url) => ({...state, url}),
  [setImporting]: (state, importing) => ({...state, importing}),
  [resetShare]: state => ({...state, ...initialShareState})
}, initialState)
