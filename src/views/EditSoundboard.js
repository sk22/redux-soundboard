import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {DeleteSoundboardIcon, BackLink, DeleteIcon} from '../components/Icons'

import {List, ListItem} from '../components/List'
import TextField from '../components/TextField'
import {updateSoundboard, deleteSoundboard} from '../actions'

const EditSoundboard = ({
  dispatch,
  history,
  match,
  sounds: allSounds,
  soundboardKey,
  soundboards,
  onNameChange,
  onDeleteSound,
  onDelete
}) => {
  let name
  let setName = n => {
    name = n
  }
  const soundboard = soundboards[soundboardKey]
  const sounds = soundboard.sounds.map(soundboardKey => ({
    soundboardKey, ...allSounds[soundboardKey]
  }))
  const soundKeys = soundboard.sounds

  return (
    <div>
      <Toolbar
        left={<BackLink history={history}/>}
        right={
          <Link to="/">
            <DeleteSoundboardIcon onClick={() => onDelete(soundboardKey)}/>
          </Link>}
      >Edit Soundboard</Toolbar>
      <Main>
        <TextField
          type="text"
          id="name"
          placeholder="Name"
          value={soundboard.name}
          innerRef={setName}
          onChange={() => onNameChange(soundboardKey, name.value)}
        />
        <List>
          {sounds.map((sound, i) => (
            <ListItem
              key={i}
              right={
                <DeleteIcon
                  compact
                  onClick={() => onDeleteSound(soundboardKey, soundKeys, i)}
                />}
            >{sound.name}</ListItem>
          ))}
        </List>
      </Main>
    </div>
  )
}

const mapStateToProps = ({soundboards, sounds}, {match}) => ({
  soundboardKey: match.params.soundboard,
  soundboards,
  sounds
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  onDelete: key => dispatch(deleteSoundboard(key)),
  onNameChange: (soundboard, name) => {
    dispatch(updateSoundboard({soundboard, update: {name}}))
  },
  onDeleteSound: (soundboard, sounds, i) => {
    dispatch(updateSoundboard({
      soundboard,
      update: {
        sounds: [...sounds.slice(0, i), ...sounds.slice(i + 1, sounds.length)]
      }
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSoundboard)
