import React from 'react'
import Icon from './Icon'
import {
  setCurrentView,
  deleteSoundboard,
  setShowShare,
  setShowImport,
  setShareUrl
} from '../actions'
import {exportSoundboard} from '../share'

const prefix = process.env.PUBLIC_URL + '/icons/'

export const MenuIcon = ({dispatch, view}) => (
  <Icon
    {...{prefix}}
    src="menu.svg"
    onClick={() => dispatch && dispatch(setCurrentView(view || 'soundboards'))}
  />
)

export const EditIcon = ({dispatch, view}) => (
  <Icon
    {...{prefix}}
    src="edit.svg"
    onClick={() => dispatch(setCurrentView(view))}
  />
)

export const BackIcon = ({dispatch, view}) => (
  <Icon
    {...{prefix}}
    src="back.svg"
    onClick={() => dispatch(setCurrentView(view))}
  />
)

export const DeleteSoundboardIcon = ({dispatch, soundboard}) => (
  <Icon
    {...{prefix}}
    src="delete.svg"
    onClick={() => {
      dispatch(deleteSoundboard(soundboard))
      dispatch(setCurrentView('soundboards'))
    }}
  />
)

export const ShareSoundboardIcon = ({dispatch, ...data}) => (
  <Icon
    {...{prefix}}
    src="share.svg"
    onClick={async () => {
      console.log('clicked share')
      dispatch(setShowShare(true))
      const url = await exportSoundboard(data)
      dispatch(setShareUrl(url))
      console.log(url)
    }}
  />
)

export const ImportSoundboardIcon = ({dispatch}) => (
  <Icon
    {...{prefix}}
    src="import.svg"
    onClick={() => dispatch(setShowImport(true))}
  />
)
