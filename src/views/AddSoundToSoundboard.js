import React from 'react'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackLink} from '../components/Icons'

import SoundAdder from '../components/SoundAdder'
import {List, ListItem} from '../components/List'
import {addSoundToSoundboard} from '../actions'

const AddSoundToSoundboard = ({history, match, sounds, onItemClick}) => (
  <div>
    <Toolbar left={<BackLink history={history}/>}>
      Add Sound
    </Toolbar>
    <Main>
      <h2>Add sound from device</h2>
      <SoundAdder match={match}/>
      <hr/>
      <h2>Choose existing sound</h2>
      <List>
        {Object.keys(sounds).map((key, i) => (
          <BackLink history={history} key={i}>
            <ListItem
              onClick={() => onItemClick(key, match.params.soundboard)}
            >{sounds[key].name}</ListItem>
          </BackLink>
        ))}
      </List>
    </Main>
  </div>
)

const mapStateToProps = ({sounds}) => ({sounds})

const mapDispatchToProps = dispatch => ({
  onItemClick: (sound, soundboard) => {
    dispatch(addSoundToSoundboard({sound, soundboard}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSoundToSoundboard)
