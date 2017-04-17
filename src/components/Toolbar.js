import React from 'react'
import styled from 'styled-components'

const StyledToolbar = styled.nav`
  display: flex;
  height: 3.75rem;
  background: #333;
  align-items: center;
`

const Left = styled.div`
  display: flex;
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`

const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .15rem;
`

export default ({children, left, right}) => (
  <StyledToolbar>
    <Left>
      {Array.isArray(left) ? left : React.Children.only(left)}
    </Left>
    <div><Heading>{children}</Heading></div>
    <Right>
      {Array.isArray(right) ? right : React.Children.only(right)}
    </Right>
  </StyledToolbar>
)
