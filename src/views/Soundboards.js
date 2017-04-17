import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import {editIcon} from '../navigation'

import SoundboardTile from '../components/SoundboardTile'
import Tile from '../components/Tile'
import Grid from '../components/Grid'
import {addSoundboard} from '../actions'

const Plus = styled.span`
  color: #111;
  font-size: 5rem;
`

const Soundboards = ({soundboards, onPlusClick}) => (
  <div>
    <Toolbar right={editIcon('editGlobal')}>
      Soundboards
    </Toolbar>
    <Main>
      <Grid>
        {Object.keys(soundboards).map((key, i) => (
          <SoundboardTile key={i} index={key} name={soundboards[key].name}/>
        ))}
        <Tile onClick={onPlusClick}><Plus>+</Plus></Tile>
      </Grid>
    </Main>
  </div>
)

const mapStateToProps = state => ({
  soundboards: state.soundboards
})

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(addSoundboard())
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboards)
