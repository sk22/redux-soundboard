import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const ListButton = styled(Button)`
  display: inline-flex;
  width: 100%;
  margin-bottom: 1rem;
`

export const ListItem = ({...props, children, left, right}) => (
  <ListButton {...props}>
    <div>{left}</div>
    <div>{children}</div>
    <div>{right}</div>
  </ListButton>
)

export const List = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  list-style-type: none;
`
