import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.button`
  display: inline-flex;
  width: 100%;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  border: none;
  border-top: .15rem solid white;
  margin-bottom: 1rem;
  background: #444;
`

export const ListItem = ({...props, children, left, right}) => (
  <StyledListItem {...props}>
    <div>{left}</div>
    <div>{children}</div>
    <div>{right}</div>
  </StyledListItem>
)

export const List = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  list-style-type: none;
`
