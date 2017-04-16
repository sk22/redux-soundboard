import React from 'react'
import styled from 'styled-components'
import Soundboards from './Soundboards'

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled.button`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: none;
  border-top: .15rem solid white;
  margin-bottom: 1rem;
  background: #444;
`

export default () => (
  <StyledMenu>
    <MenuItem>Sounds</MenuItem>
    <Soundboards/>
  </StyledMenu>
)
