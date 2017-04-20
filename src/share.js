import 'isomorphic-fetch'
import pick from 'lodash.pick'
import {
  addSound,
  addSoundboard,
  deleteSoundboard
} from './actions'
import {getHighestKey} from './util'

const gistApiUrl = 'https://api.github.com/gists'
const getGistUrl = key => `${gistApiUrl}/${key}`

const getGistObject = files => ({
  description: 'Soundboard Export (https://github.com/sk22/redux-soundboard)',
  public: false,
  files
})

const getFile = (name, value) => ({
  [name]: {content: JSON.stringify(value)}
})

const getFiles = fields => Object.keys(fields).reduce((obj, key) => ({
  ...obj, ...getFile(`${key}.json`, fields[key])
}), {})

export const exportSoundboard = async ({
  dispatch, sounds: allSounds, soundboard, history, soundboardKey
}) => {
  const sounds = pick(allSounds, soundboard.sounds)
  const files = getFiles({soundboard, ...sounds})
  const gist = getGistObject(files)
  console.log(gist)
  const response = await fetch(gistApiUrl, {
    method: 'post',
    body: JSON.stringify(gist)
  })
  dispatch(deleteSoundboard(soundboardKey))
  const {id} = await response.json()
  return id
}


const filterKey = str => {
  if (/https?:\/\/.*\//.test(str)) {
    return /https?:\/\/.*\/(.*)$/.exec(str)[1]
  }
}

export const importSoundboard = async ({
  dispatch, sounds: allSounds, soundboardKey: originalKey
}) => {
  const soundboardKey = filterKey(originalKey.trim())
  const url = getGistUrl(soundboardKey)
  const data = await (await fetch(url)).json()

  const soundboard = JSON.parse(data.files['soundboard.json'].content)
  const highestKey = getHighestKey(allSounds)
  dispatch(addSoundboard({
    key: soundboardKey,
    soundboard: {
      ...soundboard,
      sounds: soundboard.sounds.map((_, i) => highestKey + i + 1)
    }
  }))

  Object.keys(data.files).forEach(async fileKey => {
    if (fileKey === 'soundboard.json') return
    const file = data.files[fileKey]
    const sound = await (file.truncated
      ? (await fetch(file.raw_url)).json()
      : JSON.parse(file.content))
    dispatch(addSound(sound))
  })
}
