import React from 'react'
import {Link} from 'react-router-dom'

import SoundTile from '../components/SoundTile'
import Tile from '../components/Tile'
import Plus from '../components/Plus'
import Grid from '../components/Grid'

export default ({soundboard, sounds: allSounds, match}) => {
  const sounds = soundboard.sounds.map(id => allSounds[id])

  return (
    <Grid>
      {Object.keys(sounds).map((id, i) => (
        sounds[id] && (
          <SoundTile key={i} src={sounds[id].src}>
            {sounds[id].name}
          </SoundTile>
        )
      ))}
      {soundboard.locked ||
        <Link to={`${match.params.soundboard}/add`}>
          <Tile><Plus>+</Plus></Tile>
        </Link>}
    </Grid>
  )
}
