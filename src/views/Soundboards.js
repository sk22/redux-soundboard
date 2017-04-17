import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {MenuIcon, EditIcon, ImportSoundboardIcon} from '../components/navigation-icons'

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
        <EditIcon {...{dispatch}} view="editGlobal" key="1"/>
      ]}
    >Soundboards</Toolbar>
    <Main>
      <Grid>
        {Object.keys(soundboards).map((key, i) => (
          <SoundboardTile key={i} index={key} name={soundboards[key].name}/>
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
