import React from 'react'
import {connect} from 'react-redux'
import Sounds from './Sounds'
import Soundboards from './Soundboards'

const Content = ({view}) => {
  const getComponent = () => {
    switch (view) {
      case 'soundboard': return <Sounds />
      case 'soundboards': return <Soundboards />
      default: return <div>Oops.</div>
    }
  }
  return <main>{getComponent()}</main>
}

const mapStateToProps = state => ({
  view: state.view
})

export default connect(mapStateToProps)(Content)
