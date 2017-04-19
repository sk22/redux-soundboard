import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {DeleteSoundboardIcon, BackLink} from '../components/Icons'
import {DeleteIcon} from '../components/Icons'

import {List, ListItem} from '../components/List'
import TextField from '../components/TextField'
import {updateSoundboard} from '../actions'

const EditSoundboard = ({
  dispatch,
  history,
  match,
  sounds: stateSounds,
  soundboards,
  onNameChange,
  onDelete
}) => {
  let name
  let setName = n => {
    name = n
  }
  const {soundboard: key} = match.params
  const soundboard = soundboards[key]
  const sounds = soundboard.sounds.map(key => ({
    key, ...stateSounds[key]
  }))
  const soundKeys = soundboard.sounds

  return (
    <div>
      <Toolbar
        left={<BackLink history={history}/>}
        right={
          <Link to="/">
            <DeleteSoundboardIcon
              {...{dispatch}}
              soundboard={key}
            />
          </Link>}
      >Edit Soundboard</Toolbar>
      <Main>
        <TextField
          type="text"
          id="name"
          placeholder="Name"
          value={soundboard.name}
          innerRef={setName}
          onChange={() => onNameChange(key, name.value)}
        />{' '}
        <List>
          {sounds.map((sound, i) => (
            <ListItem
              key={i}
              right={
                <DeleteIcon
                  compact
                  onClick={() => onDelete(key, soundKeys, i)}
                />}
            >{sound.name}</ListItem>
          ))}
        </List>
      </Main>
    </div>
  )
}

const mapStateToProps = ({soundboards, sounds}) => ({soundboards, sounds})

const mapDispatchToProps = dispatch => ({
  dispatch,
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
