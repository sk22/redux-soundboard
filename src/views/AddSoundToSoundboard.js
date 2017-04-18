import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {BackIcon} from '../components/Icons'

import AddSound from '../components/AddSound'
import {List, ListItem} from '../components/List'
import {addSoundToSoundboard} from '../actions'

const AddSoundToSoundboard = ({match, sounds, onItemClick}) => (
  <div>
    <Toolbar left={<Link to="/"><BackIcon/></Link>}>
      Add Sound
    </Toolbar>
    <Main>
      <h2>Add sound from device</h2>
      <AddSound match={match}/>
      <hr/>
      <h2>Choose existing sound</h2>
      <List>
        {Object.keys(sounds).map((key, i) => (
          <Link to={`/${match.params.soundboard}`} key={i}>
            <ListItem
              onClick={() => onItemClick(key, match.params.soundboard)}
            >{sounds[key].name}</ListItem>
          </Link>
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
