import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import SoundTile from './SoundTile'
import Tile from './Tile'
import Grid from './Grid'
import {setCurrentView} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Sounds = ({sounds, locked, onPlusClick}) => (
  <Grid>
    {Object.keys(sounds).map((key, i) => (
      <SoundTile key={i} name={sounds[key].name} src={sounds[key].src}/>
    ))}
    {locked || <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>}
  </Grid>
)

const mapStateToProps = state => ({
  sounds: state.soundboards[state.current.soundboard].sounds
    .map(key => state.sounds[key]),
  locked: state.soundboards[state.current.soundboard].locked
})

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(setCurrentView('addSoundToSoundboard'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sounds)
