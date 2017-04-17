import React from 'react'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {deleteIconFor, backIcon} from '../navigation'

import {List, ListItem} from '../components/List'
import TextField from '../components/TextField'
import {updateSoundboard} from '../actions'

const EditSoundboard = ({
  soundboardKey, sounds, soundboard, soundKeys, onNameChange, onDelete
}) => {
  let name
  let setName = n => {
    name = n
  }

  return (
    <div>
      <Toolbar
        left={backIcon('soundboard')}
        right={deleteIconFor(soundboardKey)}
      >Edit Soundboard</Toolbar>
      <Main>
        <TextField
          type="text"
          id="name"
          placeholder="Name"
          value={soundboard.name}
          innerRef={setName}
          onChange={() => onNameChange(soundboardKey, name.value)}
        />{' '}
        <List>
          {sounds.map((sound, i) => (
            <ListItem
              key={i}
              right={
                <img
                  onClick={() => onDelete(soundboardKey, soundKeys, i)}
                  alt="delete"
                  src="/icons/delete.svg"
                />}
            >{sound.name}</ListItem>
          ))}
        </List>
      </Main>
    </div>
  )
}

const mapStateToProps = ({soundboards, sounds, current: {soundboard}}) => ({
  soundboardKey: soundboard,
  soundboard: soundboards[soundboard],
  sounds: soundboards[soundboard].sounds.map(key => ({key, ...sounds[key]})),
  soundKeys: soundboards[soundboard].sounds
})

const mapDispatchToProps = dispatch => ({
  onNameChange: (soundboard, name) => {
    dispatch(updateSoundboard({soundboard, update: {name}}))
  },
  onDelete: (soundboard, sounds, i) => {
    dispatch(updateSoundboard({
      soundboard, update: {
        sounds: [...sounds.slice(0, i), ...sounds.slice(i + 1, sounds.length)]
      }
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSoundboard)
