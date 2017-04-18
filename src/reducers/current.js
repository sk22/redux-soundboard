import {createReducer} from 'redux-act'

import {
  setShowShare,
  setShowImport,
  setShareUrl,
  resetShare,
  setImporting
} from '../actions'

const initialState = {
  showShare: false,
  showImport: false,
  url: null,
  importing: false
}


export default createReducer({
  [setShowShare]: (state, showShare) => ({...state, showShare}),
  [setShowImport]: (state, showImport) => ({...state, showImport}),
  [setShareUrl]: (state, url) => ({...state, url}),
  [setImporting]: (state, importing) => ({...state, importing}),
  [resetShare]: () => initialState
}, initialState)
