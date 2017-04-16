import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
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

const hidden = hidden => ({
  style: {
    visibility: hidden ? 'hidden' : 'visible'
  }
})

const Toolbar = ({name, onMenuClick, onEditClick, menuHidden, editHidden}) => (
  <StyledToolbar>
    <img
      src="/icons/menu.svg"
      alt="menu"
      onClick={onMenuClick}
      {...hidden(menuHidden)}
   />
    <Heading>{name}</Heading>
    <img
      src="/icons/edit.svg"
      alt="edit"
      onClick={onEditClick}
      {...hidden(editHidden)}
   />
  </StyledToolbar>
)

const mapStateToProps = state => ({
  name: state.currentView === 'soundboard' ? state.currentSoundboard.name : 'Soundboards',
  menuHidden: state.currentView === 'soundboards',
  editHidden: state.currentView !== 'soundboard'
})

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(setView('soundboards')),
  onEditClick: () => dispatch(setView('edit'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
