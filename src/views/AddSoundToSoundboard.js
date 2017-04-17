import React from 'react'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {backIcon} from '../navigation'

import AddSound from '../components/AddSound'
import {List, ListItem} from '../components/List'
import {addSoundToSoundboard, setCurrentView} from '../actions'

const AddSoundToSoundboard = ({soundboard, sounds, onItemClick}) => (
  <div>
    <Toolbar left={backIcon('soundboard')}>
      Add Sound
    </Toolbar>
    <Main>
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
    </Main>
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
