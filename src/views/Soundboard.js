import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {setShareUrl, setShowShare} from '../actions'
import {importSoundboard, exportSoundboard} from '../share'
import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import SharePopup from '../components/SharePopup'
import SoundGrid from '../components/SoundGrid'
import {
  MenuIcon,
  BackLink,
  EditIcon,
  ShareSoundboardIcon
} from '../components/Icons'

const Soundboard = ({
  history, dispatch, soundboard, sounds, soundboardKey, location, match,
  onExportRequest, onImportRequest
}) => {
  if (!soundboard) onImportRequest({sounds, soundboardKey})
  return (
    <div>
      <Toolbar
        left={<BackLink history={history}><MenuIcon/></BackLink>}
        right={soundboard && [
          <ShareSoundboardIcon
            onClick={() => onExportRequest({
              history, sounds, soundboard, soundboardKey
            })}
            key="0"
          />,
          <Link to={`/${soundboardKey}/edit`} key="1"><EditIcon/></Link>
        ]}
      >{soundboard ? soundboard.name : 'Loading...'}</Toolbar>
      <Main>
        {soundboard && (
          <SoundGrid soundboard={soundboard} sounds={sounds} match={match}/>
        )}
      </Main>
      <SharePopup/>
    </div>
  )
}

const mapStateToProps = ({current, soundboards, sounds}, {match}) => ({
  match,
  sounds,
  soundboard: soundboards[match.params.soundboard],
  soundboardKey: match.params.soundboard
})

const mapDispatchToProps = dispatch => ({
  onExportRequest: async ({history, sounds, soundboard, soundboardKey}) => {
    dispatch(setShowShare(true))
    const id = await exportSoundboard({
      dispatch, sounds, soundboard, history, soundboardKey
    })
    history.replace(`/${id}`)
    dispatch(setShareUrl(`${window.location.origin}/${id}`))
  },

  onImportRequest: ({sounds, soundboardKey}) => {
    importSoundboard({dispatch, location, sounds, soundboardKey})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboard)
