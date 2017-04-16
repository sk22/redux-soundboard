import React from 'react'
import {connect} from 'react-redux'
import AddSound from './AddSound'
import {List, ListItem} from './List'
import {addSoundToSoundboard, setCurrentView} from '../actions'

const AddSoundToSoundboard = ({soundboard, sounds, onItemClick}) => (
  <div>
    <h2>Add sound from device</h2>
    <AddSound/>
    <hr/>
    <h2>Choose existing sound</h2>
    <List>
      {Object.keys(sounds).map((key, i) => (
        <ListItem
          onClick={() => onItemClick(key, soundboard)}
          key={i}
        >{sounds[key].name}</ListItem>
      ))}
    </List>
  </div>
)

const mapStateToProps = state => ({
  soundboard: state.current.soundboard,
  sounds: state.sounds
})

const mapDispatchToProps = dispatch => ({
  onItemClick: (sound, soundboard) => {
    dispatch(addSoundToSoundboard({sound, soundboard}))
    dispatch(setCurrentView('soundboard'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSoundToSoundboard)
