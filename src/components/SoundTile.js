import React from 'react'
import Tile from './Tile'

const SoundTile = ({src, name}) => {
  const audio = new Audio(src)
  const play = () => {
    audio.currentTime = 0
    audio.play()
  }
  return (
    <Tile onClick={play}>
      <h2>{name}</h2>
    </Tile>
  )
}

export default SoundTile
