import React from 'react'
import styled from 'styled-components'
import Toolbar from './components/Toolbar'
import Content from './components/Content'

const StyledApp = styled.div`
  background: #111;
  min-height: 100vh;
  user-select: none;
  -webkit-touch-callout: none;
`

export default () => (
  <div>
    <StyledApp>
      <Toolbar/>
      <Content/>
    </StyledApp>
  </div>
)
