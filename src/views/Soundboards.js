import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {MenuIcon, EditIcon, ImportSoundboardIcon} from '../components/Icons'

import Tile from '../components/Tile'
import Grid from '../components/Grid'
import ShareImportPopup from '../components/ShareImportPopup'
import {addSoundboard} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Soundboards = ({dispatch, history, soundboards, onPlusClick}) => (
  <div>
    <Toolbar
      left={<MenuIcon history={history}/>}
      right={[
        <ImportSoundboardIcon {...{dispatch}} key="0"/>,
        <Link to="/edit" key="1"><EditIcon/></Link>
      ]}
    >Soundboards</Toolbar>
    <Main>
      <Grid>
        {Object.keys(soundboards).map((key, i) => (
          <Link to={`/${key}`} key={i}>
            <Tile index={key}>{soundboards[key].name}</Tile>
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
