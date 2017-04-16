import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Toolbar from './components/Toolbar'
import Content from './components/Content'
import {setCurrentView} from './actions'

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
          left ? <img
            src={`/icons/${left.icon}.svg`}
            alt={left.icon}
            onClick={() => left.onClick(dispatch)}
          /> : <div/>}
        center={center}
        right={
          right ? <img
            src={`/icons/${right.icon}.svg`}
            alt={right.icon}
            onClick={() => right.onClick(dispatch)}
          /> : <div/>}
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

const editIcon = {
  icon: 'edit',
  onClick: dispatch => dispatch(setCurrentView('editSoundboard'))
}

const mapStateToProps = ({soundboards, current: {view, soundboard}}) => {
  switch (view) {
    case 'soundboard': return {
      left: menuIcon,
      center: <Heading>{soundboards[soundboard].name}</Heading>,
      right: editIcon
    }
    case 'soundboards': return {
      left: menuIcon,
      center: <Heading>Soundboards</Heading>
    }
    default: return {left: menuIcon}
  }
}

export default connect(mapStateToProps)(App)
