import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Soundboard from './Soundboard'
import Soundboards from './Soundboards'
import AddSoundToSoundboard from './AddSoundToSoundboard'
import EditSoundboard from './EditSoundboard'

const Main = styled.main`
  padding: 1rem;
`

const Content = ({view}) => {
  const getComponent = () => {
    switch (view) {
      case 'soundboards': return <Soundboards/>
      case 'soundboard': return <Soundboard/>
      case 'addSoundToSoundboard': return <AddSoundToSoundboard/>
      case 'editSoundboard': return <EditSoundboard/>
      default: return <div>Oops.</div>
    }
  }
  return <Main>{getComponent()}</Main>
}

const mapStateToProps = state => ({
  view: state.current.view
})

export default connect(mapStateToProps)(Content)
