import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import ShareExportPopup from '../components/ShareExportPopup'
import {
  MenuIcon,
  BackLink,
  EditIcon,
  ShareSoundboardIcon
} from '../components/Icons'

import SoundTile from '../components/SoundTile'
import Tile from '../components/Tile'
import Plus from '../components/Plus'
import Grid from '../components/Grid'

const Soundboard = ({match, history, dispatch, state, onPlusClick}) => {
  const soundboard = state.soundboards[match.params.soundboard]
  const sounds = soundboard.sounds.map(key => state.sounds[key])

  return (
    <div>
      <Toolbar
        left={<BackLink history={history}><MenuIcon/></BackLink>}
        right={[
          <ShareSoundboardIcon {...{dispatch, state, soundboard}} key="0"/>,
          <Link to={`/${match.params.soundboard}/edit`} key="1">
            <EditIcon/>
          </Link>
        ]}
      >{soundboard.name}</Toolbar>
      <Main>
        <Grid>
          {Object.keys(sounds).map((key, i) => (
            sounds[key] && (
              <SoundTile key={i} src={sounds[key].src}>
                {sounds[key].name}
              </SoundTile>
            )
          ))}
          {soundboard.locked ||
            <Link to={`/${match.params.soundboard}/add`}>
              <Tile><Plus>+</Plus></Tile>
            </Link>}
        </Grid>
      </Main>
      <ShareExportPopup/>
    </div>
  )
}

const mapStateToProps = state => ({state})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboard)
