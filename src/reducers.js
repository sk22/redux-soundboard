const initialSoundboard = {
  name: 'Soundboard',
  sounds: [{name: 'Beep', src: '/beep.mp3'}]
}

const initialState = {
  currentSoundboard: initialSoundboard,
  currentView: 'soundboards',
  soundboards: [initialSoundboard]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SOUNDBOARD': return {
      ...state,
      soundboards: [...state.soundboards, {name: action.name}]
    }
    default: return state
  }
}
