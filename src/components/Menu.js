import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled.div`
  height: 2rem;
  text-align: center;
`

export default () => (
  <StyledMenu>
    <MenuItem>Hi</MenuItem>
  </StyledMenu>
)
