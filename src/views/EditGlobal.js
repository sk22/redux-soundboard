import React from 'react'
import {connect} from 'react-redux'
import EditSoundboards from '../components/EditSoundboards'
import EditSounds from '../components/EditSounds'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackIcon} from '../components/Icons'

const EditGlobal = ({dispatch}) => (
  <div>
    <Toolbar left={<BackIcon {...{dispatch}} view="soundboards"/>}>
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

export default connect()(EditGlobal)
