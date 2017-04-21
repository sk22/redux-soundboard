import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from './List'
import {deleteSound} from '../actions'
import {DeleteIcon} from '../components/Icons'

const EditSounds = ({sounds, onDelete}) => {
  return (
    <div>
      <List>
        {Object.keys(sounds).map((id, i) => (
          <ListItem
            key={i}
            right={<DeleteIcon compact onClick={() => onDelete(id)}/>}
          >{sounds[id].name}</ListItem>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = ({sounds}) => ({sounds})

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(deleteSound(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSounds)
