import React from 'react'
import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackLink} from '../components/Icons'

export default ({history}) => (
  <div>
    <Toolbar left={<BackLink history={history}/>}>
      Not Found
    </Toolbar>
    <Main>The requested site can not be found.</Main>
  </div>
)
