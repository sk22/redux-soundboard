import React from 'react'
import Icon from './Icon'
import {
  setCurrentView,
  deleteSoundboard,
  setShowShare,
  setShowImport,
  setShareUrl
} from '../actions'

import menu from '../icons/menu.svg'
import back from '../icons/back.svg'
import edit from '../icons/edit.svg'
import deleteIcon from '../icons/delete.svg'
import share from '../icons/share.svg'
import importIcon from '../icons/import.svg'
import {exportSoundboard} from '../icons/share.svg'

export const MenuIcon = ({dispatch, view}) => (
  <Icon
    src={menu}
    onClick={() => dispatch && dispatch(setCurrentView(view || 'soundboards'))}
  />
)

export const EditIcon = ({dispatch, view}) => (
  <Icon
    src={edit}
    onClick={() => dispatch(setCurrentView(view))}
  />
)

export const BackIcon = ({dispatch, view}) => (
  <Icon
    src={back}
    onClick={() => dispatch(setCurrentView(view))}
  />
)

export const DeleteSoundboardIcon = ({dispatch, soundboard}) => (
  <Icon
    src={deleteIcon}
    onClick={() => {
      dispatch(deleteSoundboard(soundboard))
      dispatch(setCurrentView('soundboards'))
    }}
  />
)

export const ShareSoundboardIcon = ({dispatch, ...data}) => (
  <Icon
    src={share}
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
    src={importIcon}
    onClick={() => dispatch(setShowImport(true))}
  />
)

export const DeleteIcon = props => (
  <Icon
    {...props}
    src={deleteIcon}
    alt="delete"
  />
)
