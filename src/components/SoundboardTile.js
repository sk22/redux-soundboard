import React from 'react'
import {connect} from 'react-redux'
import Tile from './Tile'
import {setCurrentSoundboard, setCurrentView} from '../actions'

const SoundboardTile = ({onTileClick, name, index}) => (
  <Tile onClick={() => onTileClick(index)}>
    <h2>{name}</h2>
  </Tile>
)

const mapDispatchToProps = dispatch => ({
  onTileClick: index => {
    dispatch(setCurrentSoundboard(index))
    dispatch(setCurrentView('soundboard'))
  }
})

export default connect(null, mapDispatchToProps)(SoundboardTile)
