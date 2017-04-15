import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Sound from './Sound'
import Tile from './Tile'

const StyledSounds = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Sounds = ({sounds = [], locked = false}) => (
  <StyledSounds>
    {sounds.map((sound, i) => (
      <Sound key={i} name={sound.name} src={sound.src} />
    ))}
    {locked || <Tile><Plus>+</Plus></Tile>}
  </StyledSounds>
)

const mapStateToProps = state => ({sounds: state.currentSoundboard.sounds})

export default connect(mapStateToProps)(Sounds)
