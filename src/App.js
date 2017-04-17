import React from 'react'
import {connect} from 'react-redux'
import Soundboard from './views/Soundboard'
import Soundboards from './views/Soundboards'
import EditSoundboard from './views/EditSoundboard'
import EditGlobal from './views/EditGlobal'
import AddSoundToSoundboard from './views/AddSoundToSoundboard'

const getComponent = view => {
  switch (view) {
    case 'soundboard': return <Soundboard/>
    case 'soundboards': return <Soundboards/>
    case 'editSoundboard': return <EditSoundboard/>
    case 'editGlobal': return <EditGlobal/>
    case 'addSoundToSoundboard': return <AddSoundToSoundboard/>
    default: return <Error/>
  }
}

const App = ({view, dispatch}) => (
  <div>{getComponent(view)}</div>
)

const mapStateToProps = ({current: {view}}) => ({view})

export default connect(mapStateToProps)(App)
