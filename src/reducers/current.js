import {createReducer} from 'redux-act'

import {
  setShowShare,
  setShowImport,
  setShareUrl,
  resetShare,
  setImporting,
  setTemporary,
  clearTemporary
} from '../actions'

const initialState = {
  showShare: false,
  showImport: false,
  importing: false,
  url: null
}

export default createReducer({
  [setShowShare]: (state, showShare) => ({...state, showShare}),
  [setShowImport]: (state, showImport) => ({...state, showImport}),
  [setShareUrl]: (state, url) => ({...state, url}),
  [setImporting]: (state, importing) => ({...state, importing}),
  [resetShare]: () => initialState,
  [setTemporary]: (state, temporary) => ({...state, temporary}),
  [clearTemporary]: state => ({...state, temporary: initialState.temporary})
}, initialState)
