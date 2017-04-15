import React from 'react'
import {connect} from 'react-redux'
import Tile from './Tile'
import {setSoundboard} from '../actions'

const SoundboardTile = ({onTileClick, name, index}) => (
  <Tile onClick={() => onTileClick(index)}>
    <h2>{name}</h2>
  </Tile>
)

const mapDispatchToProps = dispatch => ({
  onTileClick: index => dispatch(setSoundboard(index))
})

export default connect(null, mapDispatchToProps)(SoundboardTile)
