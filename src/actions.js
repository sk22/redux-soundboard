import {createAction} from 'redux-act'

export const addSoundboard = createAction('add a soundboard')
export const deleteSoundboard = createAction('delete a soundboard')
export const updateSoundboard = createAction('update a soundboard')
export const addSound = createAction('add a sound')
export const deleteSound = createAction('delete a sound')
export const addSoundToSoundboard = createAction('add a sound to a soundboard')
export const setCurrentSoundboard = createAction('set the current soundboard')
export const setCurrentView = createAction('set the current view')
