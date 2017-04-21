import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {
  MenuIcon,
  EditIcon,
  InfoIcon,
  ImportSoundboardIcon
} from '../components/Icons'

import Tile from '../components/Tile'
import Grid from '../components/Grid'
import Plus from '../components/Plus'
import ImportPopup from '../components/ImportPopup'
import {addSoundboard, setShowImport} from '../actions'

const Soundboards = ({
  dispatch, soundboards, history, onPlusClick, onImportClick
}) => (
  <div>
    <Toolbar
      left={<MenuIcon/>}
      right={[
        <Link to="/about" key="0"><InfoIcon/></Link>,
        <ImportSoundboardIcon onClick={onImportClick} key="1"/>,
        <Link to="/edit" key="2"><EditIcon/></Link>
      ]}
    >Soundboards</Toolbar>
    <Main>
      <Grid>
        {Object.keys(soundboards).map((id, i) => (
          <Link to={`/${id}`} key={i}>
            <Tile index={id}>{soundboards[id].name}</Tile>
          </Link>
        ))}
        <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>
      </Grid>
    </Main>
    <ImportPopup history={history}/>
  </div>
)

const mapStateToProps = state => ({
  soundboards: state.soundboards
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  onPlusClick: () => dispatch(addSoundboard()),
  onImportClick: () => dispatch(setShowImport(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboards)
