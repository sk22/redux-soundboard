import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import SoundTile from './SoundTile'
import Tile from './Tile'
import Grid from './Grid'
import {setView} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Sounds = ({sounds = [], locked = false, onPlusClick}) => (
  <Grid>
    {sounds.map((sound, i) => (
      <SoundTile key={i} name={sound.name} src={sound.src}/>
    ))}
    {locked || <Tile><Plus onClick={onPlusClick}>+</Plus></Tile>}
  </Grid>
)

const mapStateToProps = state => ({
  sounds: state.currentSoundboard.sounds,
  locked: state.currentSoundboard.locked
})

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(setView('addSound'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sounds)
