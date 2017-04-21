import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
  setShareUrl,
  setShowShare,
  addSoundboard,
  deleteSoundboard
} from '../actions'

import {importSoundboard, exportSoundboard} from '../share'
import Toolbar from '../components/Toolbar'
import Main from '../components/Main'
import SharePopup from '../components/SharePopup'
import SoundGrid from '../components/SoundGrid'
import {
  MenuIcon,
  MenuLink,
  EditIcon,
  ShareSoundboardIcon
} from '../components/Icons'

const Soundboard = ({
  history, dispatch, soundboard, sounds, id, location, match,
  onExportRequest, onImportRequest
}) => {
  if (!soundboard) {
    onImportRequest({sounds, id})
  }
  return (
    <div>
      <Toolbar
        left={<MenuLink history={history}><MenuIcon/></MenuLink>}
        right={soundboard && [
          <ShareSoundboardIcon
            onClick={() => onExportRequest({
              history, sounds, soundboard, id
            })}
            key="0"
          />,
          <Link to={`/${id}/edit`} key="1"><EditIcon/></Link>
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
  showShare: current.showShare,
  soundboard: soundboards[match.params.soundboard],
  id: match.params.soundboard
})

const mapDispatchToProps = dispatch => ({
  onExportRequest: async ({history, sounds, soundboard, id}) => {
    dispatch(setShowShare(true))
    const newId = await exportSoundboard({
      dispatch, sounds, soundboard, history, id
    })
    dispatch(addSoundboard({id: newId, soundboard}))
    history.replace(`/${newId}`)
    dispatch(deleteSoundboard(id))
    dispatch(setShareUrl(`${window.location.origin}/${newId}`))
  },

  onImportRequest: ({sounds, id}) => (
    importSoundboard({dispatch, sounds, id})
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Soundboard)
