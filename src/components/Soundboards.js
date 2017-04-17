import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import SoundboardTile from './SoundboardTile'
import Tile from './Tile'
import Grid from './Grid'
import {addSoundboard} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Soundboards = ({soundboards, onPlusClick}) => (
  <Grid>
    {Object.keys(soundboards).map((key, i) => (
      <SoundboardTile key={i} index={key} name={soundboards[key].name}/>
    ))}
    <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>
  </Grid>
)

const mapStateToProps = state => ({
  soundboards: state.soundboards
})

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(addSoundboard())
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboards)
