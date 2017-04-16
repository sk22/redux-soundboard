import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import AddSound from './AddSound'
import {addSoundToSoundboard, setCurrentView} from '../actions'

const List = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  list-style-type: none;
`

const ListItem = styled.button`
  display: inline-flex;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: none;
  border-top: .15rem solid white;
  margin-bottom: 1rem;
  background: #444;
`

const AddSoundToSoundboard = ({soundboard, sounds, onItemClick}) => (
  <div>
    <h2>Add sound from device</h2>
    <AddSound/>
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
