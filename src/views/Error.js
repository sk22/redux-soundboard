import React from 'react'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {backIcon} from '../navigation'

export default () => (
  <div>
    <Toolbar left={backIcon('soundboards')}>
      Not Found
    </Toolbar>
    <Main>The requested site can not be found.</Main>
  </div>
)
