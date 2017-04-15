export const addSoundboard = name => ({
  type: 'ADD_SOUNDBOARD',
  name
})

export const addSound = (name, url) => ({
  type: 'ADD_SOUND',
  name,
  url
})

export const setCurrentSoundboard = index => ({
  type: 'SET_CURRENT_SOUNDBOARD',
  index
})
