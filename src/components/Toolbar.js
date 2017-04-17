import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const StyledToolbar = styled.nav`
  display: flex;
  height: 3.75rem;
  background: #333;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const IconDiv = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`

const Toolbar = ({children, left, right, dispatch}) => (
  <StyledToolbar>
    <IconDiv>{left && left(dispatch)}</IconDiv>
    <h1>{children}</h1>
    <IconDiv>{right && right(dispatch)}</IconDiv>
  </StyledToolbar>
)

export default connect()(Toolbar)
