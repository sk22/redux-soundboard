import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {MenuIcon, EditIcon, ImportSoundboardIcon} from '../components/Icons'

import SoundboardTile from '../components/SoundboardTile'
import Tile from '../components/Tile'
import Grid from '../components/Grid'
import ShareImportPopup from '../components/ShareImportPopup'
import {addSoundboard} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Soundboards = ({dispatch, soundboards, onPlusClick}) => (
  <div>
    <Toolbar
      left={<MenuIcon/>}
      right={[
        <ImportSoundboardIcon {...{dispatch}} key="0"/>,
        <Link to="/edit" key="1"><EditIcon/></Link>
      ]}
    >Soundboards</Toolbar>
    <Main>
      <Grid>
        {Object.keys(soundboards).map((key, i) => (
          <Link to={`/${key}`} key={i}>
            <SoundboardTile index={key} name={soundboards[key].name}/>
          </Link>
        ))}
        <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>
      </Grid>
    </Main>
    <ShareImportPopup/>
  </div>
)

const mapStateToProps = state => ({
  soundboards: state.soundboards
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  onPlusClick: () => dispatch(addSoundboard())
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboards)
