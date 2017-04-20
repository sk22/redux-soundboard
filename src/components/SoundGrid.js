import React from 'react'
import {Link} from 'react-router-dom'

import SoundTile from '../components/SoundTile'
import Tile from '../components/Tile'
import Plus from '../components/Plus'
import Grid from '../components/Grid'

export default ({soundboard, sounds: allSounds, match}) => {
  const sounds = soundboard.sounds.map(key => allSounds[key])

  return (
    <Grid>
      {Object.keys(sounds).map((key, i) => (
        sounds[key] && (
          <SoundTile key={i} src={sounds[key].src}>
            {sounds[key].name}
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
