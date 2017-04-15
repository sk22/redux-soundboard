import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import {setView} from '../actions'

const StyledToolbar = styled.nav`
  display: flex;
  background: #333;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const Heading = styled.h1`
  color: white;
`

const Toolbar = ({name, onMenuClick}) => (
  <StyledToolbar>
    <Hamburger onClick={onMenuClick} />
    <Heading>{name}</Heading>
    <div />
  </StyledToolbar>
)

const mapStateToProps = state => ({
  name: state.view === 'soundboard' ? state.soundboard.name : 'Soundboards'
})

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(setView('soundboards'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
