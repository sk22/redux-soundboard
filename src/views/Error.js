import React from 'react'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackIcon} from '../components/Icons'

const Error = ({dispatch}) => (
  <div>
    <Toolbar left={<BackIcon {...{dispatch}} view="soundboards"/>}>
      Not Found
    </Toolbar>
    <Main>The requested site can not be found.</Main>
  </div>
)

export default connect()(Error)
