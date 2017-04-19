import React from 'react'
import Icon from './Icon'
import {
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
import {exportSoundboard} from '../share'

export const MenuIcon = () => <Icon src={menu}/>

export const EditIcon = () => <Icon src={edit}/>

export const BackIcon = props => <Icon src={back} {...props}/>

export const BackLink = ({history, ...props}) => (
  <BackIcon onClick={history.goBack} {...props}/>
)

export const DeleteSoundboardIcon = ({dispatch, soundboard}) => (
  <Icon
    src={deleteIcon}
    onClick={() => dispatch(deleteSoundboard(soundboard))}
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
