import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import About from './views/About'
import Soundboard from './views/Soundboard'
import Soundboards from './views/Soundboards'
import EditSoundboard from './views/EditSoundboard'
import EditGlobal from './views/EditGlobal'
import AddSoundToSoundboard from './views/AddSoundToSoundboard'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Soundboards}/>
      <Route path="/edit" component={EditGlobal}/>
      <Route path="/about" component={About}/>
      <Route path="/:soundboard/edit" component={EditSoundboard}/>
      <Route path="/:soundboard/add" component={AddSoundToSoundboard}/>
      <Route path="/:soundboard" component={Soundboard}/>
      <Route component={Error}/>
    </Switch>
  </Router>
)

export default App
