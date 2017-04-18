import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from './List'
import {deleteSoundboard} from '../actions'
import {DeleteIcon} from '../components/Icons'

const EditSoundboards = ({soundboards, onDelete}) => {
  return (
    <div>
      <List>
        {Object.keys(soundboards).map((key, i) => (
          <ListItem
            key={i}
            right={<DeleteIcon compact onClick={() => onDelete(key)}/>}
          >{soundboards[key].name}</ListItem>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = ({soundboards}) => ({soundboards})

const mapDispatchToProps = dispatch => ({
  onDelete: key => {
    dispatch(deleteSoundboard(key))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSoundboards)
