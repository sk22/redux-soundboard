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

const Sounds = ({sounds = [], locked = false, onPlusClick}) => (
  <Grid>
    {sounds.map((sound, i) => (
      <SoundTile key={i} name={sound.name} src={sound.src}/>
    ))}
    {locked || <Tile><Plus onClick={onPlusClick}>+</Plus></Tile>}
  </Grid>
)

const mapStateToProps = state => ({
  sounds: state.current.soundboard.sounds,
  locked: state.current.soundboard.locked
})

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(setCurrentView('addSound'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sounds)
