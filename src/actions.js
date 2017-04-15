export const addSoundboard = name => ({
  type: 'ADD_SOUNDBOARD',
  name
})

export const addSound = (name, url) => ({
  type: 'ADD_SOUND',
  name,
  url
})

export const setSoundboard = index => ({
  type: 'SET_SOUNDBOARD',
  index
})

export const setView = view => ({
  type: 'SET_VIEW',
  view
})
