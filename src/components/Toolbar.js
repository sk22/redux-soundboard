import React from 'react'
import styled from 'styled-components'

const StyledToolbar = styled.nav`
  display: flex;
  line-height: 0;
  height: 3.75rem;
  background: #333;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const Left = styled.div`
  display: flex;
  align-items: center;
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
      {left && (Array.isArray(left) ? left : React.Children.only(left))}
    </Left>
    <div><Heading>{children}</Heading></div>
    <Right>
      {right && (Array.isArray(right) ? right : React.Children.only(right))}
    </Right>
  </StyledToolbar>
)
