import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {loadState, saveState} from './local-storage'
import App from './App'
import soundboardApp from './reducers'
import './index.css'

// Video tutorial on persisting Redux states
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
const persistedState = loadState()
const store = createStore(
  soundboardApp,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState(store.getState())
})

render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
)
