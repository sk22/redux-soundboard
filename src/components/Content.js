import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Sounds from './Sounds'
import Soundboards from './Soundboards'
import AddSound from './AddSound'

const Main = styled.main`
  padding: 1rem;
`

const Content = ({view}) => {
  const getComponent = () => {
    switch (view) {
      case 'soundboard': return <Sounds/>
      case 'soundboards': return <Soundboards/>
      case 'addSound': return <AddSound/>
      default: return <div>Oops.</div>
    }
  }
  return <Main>{getComponent()}</Main>
}

const mapStateToProps = state => ({
  view: state.currentView
})

export default connect(mapStateToProps)(Content)
