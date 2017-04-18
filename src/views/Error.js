import React from 'react'
import {Link} from 'react-router-dom'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackIcon} from '../components/Icons'

export default () => (
  <div>
    <Toolbar left={<Link to="/"><BackIcon/></Link>}>
      Not Found
    </Toolbar>
    <Main>The requested site can not be found.</Main>
  </div>
)
