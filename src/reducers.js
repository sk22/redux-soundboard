const soundboardTemplate = {
  name: 'Unnamed',
  sounds: [],
  locked: false
}

const initialState = {
  currentSoundboard: 0,
  currentView: 'soundboards',
  soundboards: {0: {...soundboardTemplate, name: 'Default'}},
  sounds: {0: {name: 'Beep', src: '/beep.mp3'}}
}
