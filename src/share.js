import 'isomorphic-fetch'
import pick from 'lodash.pick'
import {addSound, addSoundboard} from './actions'
import {getHighestKey} from './reducers/util'

const gistApiUrl = 'https://api.github.com/gists'

const getGistObject = ({soundboard, sounds}) => ({
  description: 'Soundboard Export (https://github.com/sk22/redux-soundboard)',
  public: false,
  files: {
    'soundboard.json': {content: JSON.stringify(soundboard)},
    'sounds.json': {content: JSON.stringify(sounds)}
  }
})

export const exportSoundboard = async ({state, soundboard}) => {
  const sounds = pick(state.sounds, soundboard.sounds)
  const response = await fetch(gistApiUrl, {
    method: 'post',
    body: JSON.stringify(getGistObject({sounds, soundboard}))
  })
  const data = await response.json()
  return data.url
}

export const importSoundboard = async ({state, url, dispatch}) => {
  const response = await fetch(url)
  const data = await response.json()
  const soundboard = JSON.parse(data.files['soundboard.json'].content)
  const sounds = JSON.parse(data.files['sounds.json'].content)
  const highestKey = getHighestKey(state.sounds)
  soundboard.sounds.forEach(key => dispatch(addSound(sounds[key])))
  dispatch(addSoundboard({
    ...soundboard,
    sounds: Object.keys(sounds).map((_, i) => highestKey + i + 1)
  }))
}
