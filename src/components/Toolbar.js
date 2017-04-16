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

export default ({left, center, right}) => (
  <StyledToolbar>
    {left}{center}{right}
  </StyledToolbar>
)
