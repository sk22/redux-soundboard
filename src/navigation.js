import React from 'react'
import {setCurrentView, deleteSoundboard} from './actions'

const getImgTag = ({icon, onClick}) => dispatch => (
  <img
    src={`/icons/${icon}.svg`}
    alt={icon}
    onClick={() => onClick(dispatch)}
  />
)

export const menuIcon = view => getImgTag({
  icon: 'menu',
  onClick: dispatch => dispatch(setCurrentView(view || 'soundboards'))
})

export const editIcon = view => getImgTag({
  icon: 'edit',
  onClick: dispatch => dispatch(setCurrentView(view))
})

export const backIcon = view => getImgTag({
  icon: 'back',
  onClick: dispatch => dispatch(setCurrentView(view))
})

export const deleteIconFor = soundboard => getImgTag({
  icon: 'delete',
  onClick: dispatch => {
    dispatch(deleteSoundboard(soundboard))
    dispatch(setCurrentView('soundboards'))
  }
})
