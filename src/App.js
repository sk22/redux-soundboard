import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Toolbar from './components/Toolbar'
import Content from './components/Content'
import {setCurrentView, deleteSoundboard} from './actions'

const StyledApp = styled.div`
  background: #111;
  min-height: 100vh;
  user-select: none;
  -webkit-touch-callout: none;
`

const App = ({left, center, right, dispatch}) => (
  <div>
    <StyledApp>
      <Toolbar
        left={
          left && <img
            src={`/icons/${left.icon}.svg`}
            alt={left.icon}
            onClick={() => left.onClick(dispatch)}
          />}
        center={center}
        right={
          right && <img
            src={`/icons/${right.icon}.svg`}
            alt={right.icon}
            onClick={() => right.onClick(dispatch)}
          />}
      />
      <Content/>
    </StyledApp>
  </div>
)

const Heading = styled.h1`
  color: white;
`

const menuIcon = {
  icon: 'menu',
  onClick: dispatch => dispatch(setCurrentView('soundboards'))
}

const editIcon = view => ({
  icon: 'edit',
  onClick: dispatch => dispatch(setCurrentView(view))
})

const backIcon = view => ({
  icon: 'back',
  onClick: dispatch => dispatch(setCurrentView(view))
})

const mapStateToProps = ({soundboards, current: {view, soundboard}}) => {
  switch (view) {
    case 'soundboard': return {
      left: menuIcon,
      center: <Heading>{soundboards[soundboard].name}</Heading>,
      right: editIcon('editSoundboard')
    }
    case 'soundboards': return {
      center: <Heading>Soundboards</Heading>,
      right: editIcon('editGlobal')
    }
    case 'editSoundboard': return {
      left: backIcon('soundboard'),
      center: <Heading>Edit Soundboard</Heading>,
      right: {
        icon: 'delete',
        onClick: dispatch => {
          dispatch(deleteSoundboard(soundboard))
          dispatch(setCurrentView('soundboards'))
        }
      }
    }
    case 'editGlobal': return {
      left: backIcon('soundboards'),
      center: <Heading>Edit</Heading>
    }
    case 'addSoundToSoundboard': return {
      left: backIcon('soundboard'),
      center: <Heading>Add Sound</Heading>
    }
    default: return {left: menuIcon}
  }
}

export default connect(mapStateToProps)(App)
