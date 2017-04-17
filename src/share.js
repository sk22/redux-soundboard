import 'isomorphic-fetch'
import pick from 'lodash.pick'

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
