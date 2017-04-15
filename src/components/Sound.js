import React from 'react'
import Tile from './Tile'

const Sound = ({src, name}) => {
  const audio = new Audio(src)
  const play = () => audio.play()
  return (
    <Tile onClick={play}>
      <h2>{name}</h2>
    </Tile>
  )
}

export default Sound
