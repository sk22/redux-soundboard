import React from 'react'
import {connect} from 'react-redux'
import Icon from './Icon'
import {List, ListItem} from './List'
import {deleteSoundboard} from '../actions'

const EditSoundboards = ({soundboards, onDelete}) => {
  return (
    <div>
      <List>
        {Object.keys(soundboards).map((key, i) => (
          <ListItem
            key={i}
            right={
              <Icon
                compact
                prefix={process.env.PUBLIC_URL + '/icons/'}
                src="delete.svg"
                alt="delete"
                onClick={() => onDelete(key)}
              />}
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
