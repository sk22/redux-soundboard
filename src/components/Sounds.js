import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import SoundTile from './SoundTile'
import Tile from './Tile'
import Grid from './Grid'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Sounds = ({sounds = [], locked = false}) => (
  <Grid>
    {sounds.map((sound, i) => (
      <SoundTile key={i} name={sound.name} src={sound.src} />
    ))}
    {locked || <Tile><Plus>+</Plus></Tile>}
  </Grid>
)

const mapStateToProps = state => ({
  sounds: state.soundboard.sounds,
  locked: state.soundboard.locked
})

export default connect(mapStateToProps)(Sounds)
