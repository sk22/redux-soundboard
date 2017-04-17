import React from 'react'
import {connect} from 'react-redux'
import Popup from './Popup'

const SharePopup = ({share: {show}}) => (
  <Popup
    style={{display: show || 'none'}}
    onCloseRequest={() => console.log('close request')}
  >Share</Popup>
)

const mapStateToProps = ({share}) => ({share})

export default connect(mapStateToProps)(SharePopup)
