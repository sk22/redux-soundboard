const initialSoundboard = {
  name: 'Soundboard',
  sounds: [{name: 'Beep', src: '/beep.mp3'}],
  locked: false
}

const initialState = {
  soundboard: initialSoundboard,
  view: 'soundboards',
  soundboards: [initialSoundboard]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SOUNDBOARD': return {
      ...state,
      soundboards: [...state.soundboards, {name: action.name}]
    }
    case 'SET_VIEW': return {...state, view: action.view}
    case 'SET_SOUNDBOARD': return {
      ...state,
      soundboard: state.soundboards[action.index],
      view: 'soundboard'
    }
    default: return state
  }
}
