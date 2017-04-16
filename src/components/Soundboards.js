import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import SoundboardTile from './SoundboardTile'
import Tile from './Tile'
import Grid from './Grid'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Soundboards = ({soundboards = []}) => (
  <Grid>
    {soundboards.map((soundboard, i) => (
      <SoundboardTile key={i} index={i} name={soundboard.name}/>
    ))}
    <Tile><Plus>+</Plus></Tile>
  </Grid>
)

const mapStateToProps = state => ({
  soundboards: state.soundboards
})

export default connect(mapStateToProps)(Soundboards)
