import React from 'react'
import EditSoundboards from '../components/EditSoundboards'
import EditSounds from '../components/EditSounds'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackLink} from '../components/Icons'

export default ({history}) => (
  <div>
    <Toolbar left={<BackLink history={history}/>}>
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
