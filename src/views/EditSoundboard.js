import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import Container from '../components/Container'
import {DeleteSoundboardIcon, BackLink, DeleteIcon} from '../components/Icons'

import {List, ListItem} from '../components/List'
import TextField from '../components/TextField'
import {updateSoundboard, deleteSoundboard} from '../actions'

const EditSoundboard = ({
  dispatch, history, match, sounds: allSounds, id, soundboards, onNameChange,
  onDeleteSound, onDelete
}) => {
  let name
  let setName = n => {
    name = n
  }
  const soundboard = soundboards[id]
  const sounds = soundboard.sounds.map(id => ({
    id, ...allSounds[id]
  }))
  const soundKeys = soundboard.sounds

  return (
    <div>
      <Toolbar
        left={<BackLink history={history}/>}
        right={
          <Link to="/">
            <DeleteSoundboardIcon onClick={() => onDelete(id)}/>
          </Link>}
      >Edit Soundboard</Toolbar>
      <Main>
        <Container>
          <TextField
            type="text"
            id="name"
            placeholder="Name"
            value={soundboard.name}
            innerRef={setName}
            onChange={() => onNameChange(id, name.value)}
          />
          <List>
            {sounds.map((sound, i) => (
              <ListItem
                key={i}
                right={
                  <DeleteIcon
                    compact
                    onClick={() => onDeleteSound(id, soundKeys, i)}
                  />}
              >{sound.name}</ListItem>
            ))}
          </List>
        </Container>
      </Main>
    </div>
  )
}

const mapStateToProps = ({soundboards, sounds}, {match}) => ({
  id: match.params.soundboard,
  soundboards,
  sounds
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  onDelete: id => dispatch(deleteSoundboard(id)),
  onNameChange: (id, name) => {
    dispatch(updateSoundboard({id, update: {name}}))
  },
  onDeleteSound: (id, sounds, i) => {
    dispatch(updateSoundboard({
      id,
      update: {
        sounds: [...sounds.slice(0, i), ...sounds.slice(i + 1, sounds.length)]
      }
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSoundboard)
