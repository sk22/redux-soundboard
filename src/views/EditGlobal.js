import React from 'react'
import {Link} from 'react-router-dom'
import EditSoundboards from '../components/EditSoundboards'
import EditSounds from '../components/EditSounds'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackIcon} from '../components/Icons'

export default () => (
  <div>
    <Toolbar left={<Link to="/"><BackIcon/></Link>}>
      Edit Global
    </Toolbar>
    <Main>
      <h2>Edit Soundboards</h2>
      <EditSoundboards/>
      <hr/>
      <h2>Edit Sounds</h2>
      <EditSounds/>
    </Main>
  </div>
)
