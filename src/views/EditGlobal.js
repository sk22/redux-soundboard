import React from 'react'
import EditSoundboards from '../components/EditSoundboards'
import EditSounds from '../components/EditSounds'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {backIcon} from '../navigation'

export default () => (
  <div>
    <Toolbar left={backIcon('soundboards')}>
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
