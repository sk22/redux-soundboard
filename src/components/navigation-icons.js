import React from 'react'
import Icon from './Icon'
import {setCurrentView, deleteSoundboard} from '../actions'
import {exportSoundboard} from '../share'

const prefix = '/icons/'

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
      const result = await exportSoundboard(data)
      console.log(result)
    }}
  />
)
