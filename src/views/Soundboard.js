import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import ShareExportPopup from '../components/ShareExportPopup'
import {
  MenuIcon,
  EditIcon,
  ShareSoundboardIcon
} from '../components/Icons'

import SoundTile from '../components/SoundTile'
import Tile from '../components/Tile'
import Grid from '../components/Grid'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Soundboard = ({match, history, dispatch, state, onPlusClick}) => {
  const soundboard = state.soundboards[match.params.soundboard]
  const sounds = soundboard.sounds.map(key => state.sounds[key])

  return (
    <div>
      <Toolbar
        left={<Link to="/"><MenuIcon history={history}/></Link>}
        right={[
          <Link to={`/${match.params.soundboard}/share`} key="0">
            <ShareSoundboardIcon {...{dispatch, state, soundboard}}/>
          </Link>,
          <Link to={`/${match.params.soundboard}/edit`} key="1">
            <EditIcon {...{dispatch}} view="editSoundboard"/>
          </Link>
        ]}
      >{soundboard.name}</Toolbar>
      <Main>
        <Grid>
          {Object.keys(sounds).map((key, i) => (
            sounds[key] && (
              <SoundTile
                key={i}
                name={sounds[key].name}
                src={sounds[key].src}
              />
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
