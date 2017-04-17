import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {menuIcon, editIcon} from '../navigation'

import SoundTile from '../components/SoundTile'
import Tile from '../components/Tile'
import Grid from '../components/Grid'
import {setCurrentView} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Sounds = ({name, sounds, locked, onPlusClick}) => (
  <div>
    <Toolbar left={menuIcon()} right={editIcon('editSoundboard')}>
      {name}
    </Toolbar>
    <Main>
      <Grid>
        {Object.keys(sounds).map((key, i) => (
          sounds[key] && (
            <SoundTile
              key={i}
              name={sounds[key].name}
              src={sounds[key].src}
            />
          )
        ))}
        {locked || <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>}
      </Grid>
    </Main>
  </div>
)

const mapStateToProps = state => ({
  sounds: state.soundboards[state.current.soundboard].sounds
    .map(key => state.sounds[key]),
  locked: state.soundboards[state.current.soundboard].locked,
  name: state.soundboards[state.current.soundboard].name
})

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(setCurrentView('addSoundToSoundboard'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sounds)
