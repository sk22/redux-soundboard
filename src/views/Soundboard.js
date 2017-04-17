import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import ShareExportPopup from '../components/ShareExportPopup'
import {
  MenuIcon,
  EditIcon,
  ShareSoundboardIcon
} from '../components/navigation-icons'

import SoundTile from '../components/SoundTile'
import Tile from '../components/Tile'
import Grid from '../components/Grid'
import {setCurrentView} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Sounds = ({dispatch, state, soundboard, sounds, onPlusClick}) => (
  <div>
    <Toolbar
      left={<MenuIcon {...{dispatch}}/>}
      right={[
        <ShareSoundboardIcon {...{dispatch, state, soundboard}} key="0"/>,
        <EditIcon {...{dispatch}} view="editSoundboard" key="1"/>
      ]}
    >{soundboard.name}</Toolbar>
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
        {soundboard.locked || <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>}
      </Grid>
    </Main>
    <ShareExportPopup/>
  </div>
)

const mapStateToProps = state => ({
  state,
  sounds: state.soundboards[state.current.soundboard].sounds
    .map(key => state.sounds[key]),
  soundboard: state.soundboards[state.current.soundboard]
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  onPlusClick: () => dispatch(setCurrentView('addSoundToSoundboard'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sounds)
