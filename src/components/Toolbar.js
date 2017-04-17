import React from 'react'
import styled from 'styled-components'

const StyledToolbar = styled.nav`
  display: flex;
  height: 3.75rem;
  background: #333;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const IconDiv = styled.div`
  width: 1.5rem
  height: 1.5rem
`

export default ({left, center, right}) => (
  <StyledToolbar>
    <IconDiv>{left}</IconDiv>
    {center}
    <IconDiv>{right}</IconDiv>
  </StyledToolbar>
)
