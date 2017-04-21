import React from 'react'
import Icon from './Icon'

import menu from '../icons/menu.svg'
import info from '../icons/info.svg'
import back from '../icons/back.svg'
import edit from '../icons/edit.svg'
import deleteIcon from '../icons/delete.svg'
import share from '../icons/share.svg'
import importIcon from '../icons/import.svg'
import github from '../icons/github.svg'

export const MenuIcon = p => (<Icon src={menu} alt="menu" {...p}/>)
export const InfoIcon = p => (<Icon src={info} alt="info" {...p}/>)
export const EditIcon = p => (<Icon src={edit} alt="edit" {...p}/>)
export const BackIcon = p => (<Icon src={back} alt="back" {...p}/>)
export const GitHubIcon = p => (<Icon src={github} alt="github" {...p}/>)

export const BackLink = ({history, children = <BackIcon/>, ...props}) => {
  const goBack = () => history.length - 1
    ? history.goBack()
    : history.replace('/')
  return (<a onClick={goBack} children={children} {...props}/>)
}

export const MenuLink = ({history, children = <BackIcon/>, ...props}) => {
  const toMenu = () => {
    const path = history.location.pathname
    history.replace('/')
    history.push(path)
    history.goBack()
  }
  return (<a onClick={toMenu} children={children} {...props}/>)
}

export const DeleteSoundboardIcon = props => (
  <Icon src={deleteIcon} {...props}/>
)

export const ShareSoundboardIcon = props => (<Icon src={share} {...props}/>)

export const ImportSoundboardIcon = props => (
  <Icon src={importIcon} {...props}/>
)

export const DeleteIcon = props => (
  <Icon src={deleteIcon} {...props} alt="delete"/>
)
