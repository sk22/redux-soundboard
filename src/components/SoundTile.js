import React from 'react'
import Tile from './Tile'

const SoundTile = ({src, children}) => {
  const audio = new Audio(src)
  const play = () => {
    audio.currentTime = 0
    audio.play()
  }
  return (
    <Tile onMouseDown={play}>
      {children}
    </Tile>
  )
}

export default SoundTile
