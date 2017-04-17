import React from 'react'
import {connect} from 'react-redux'
import Icon from './Icon'
import {List, ListItem} from './List'
import {deleteSound} from '../actions'


const EditSounds = ({sounds, onDelete}) => {
  return (
    <div>
      <List>
        {Object.keys(sounds).map((key, i) => (
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
          >{sounds[key].name}</ListItem>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = ({sounds}) => ({sounds})

const mapDispatchToProps = dispatch => ({
  onDelete: key => {
    dispatch(deleteSound(key))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSounds)
