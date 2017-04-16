// const initialState = {
//   soundboard: 0,
//   view: 'soundboards',
//   soundboards: [
//     {
//       index: 0,
//       name: 'Soundboard',
//       sounds: [{index: 0, name: 'Beep', src: '/beep.mp3'}],
//       locked: false
//     }
//   ]
// }

const initialState = {
  currentSoundboard: 0,
  currentView: 'soundboards',
  soundboards: [
    {
      name: 'Soundboard',
      sounds: [0],
      locked: false
    }
  ],
  sounds: [{name: 'Beep', src: '/beep.mp3'}]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SOUNDBOARD': return {
      ...state,
      soundboards: [...state.currentSoundboards, {
        index: state.currentSoundboards.length, name: action.name
      }]
    }
    case 'ADD_SOUND': return {
      ...state,
      view: 'soundboard',
      soundboards: [
        ...state.currentSoundboards,
        [state.currentSoundboard]: {
          ...state.currentSoundboards[state.currentSoundboard],
          sounds: [
            ...state.currentSoundboard,
            {name: action.name, src: action.src}
          ]
        }
      ]
    }
    case 'SET_VIEW': return {...state, view: action.view}
    case 'SET_SOUNDBOARD': return {
      ...state,
      soundboard: state.currentSoundboards[action.index],
      view: 'soundboard'
    }
    default: return state
  }
}
