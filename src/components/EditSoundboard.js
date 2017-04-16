import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from './List'
import {updateSoundboard} from '../actions'


const EditSoundboard = ({
  soundboardKey, soundboard, sounds, soundKeys, onNameChange, onDelete
}) => {
  let name
  let setName = n => {
    name = n
  }

  return (
    <div>
      <input
        type="text"
        value={soundboard.name}
        ref={setName}
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
