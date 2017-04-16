import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Soundboard from './Soundboard'
import Menu from './Menu'
import Soundboards from './Soundboards'
import AddSound from './AddSound'

const Main = styled.main`
  padding: 1rem;
`

const Content = ({view}) => {
  const getComponent = () => {
    switch (view) {
      case 'soundboards': return <Soundboards/>
      case 'soundboard': return <Soundboard/>
      case 'menu': return <Menu/>
      case 'addSound': return <AddSound/>
      default: return <div>Oops.</div>
    }
  }
  return <Main>{getComponent()}</Main>
}

const mapStateToProps = state => ({
  view: state.current.view
})

export default connect(mapStateToProps)(Content)
