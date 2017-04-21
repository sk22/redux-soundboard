import 'isomorphic-fetch'
import pick from 'lodash.pick'
import {
  addSound,
  addSoundboard
} from './actions'

const gistApiUrl = 'https://api.github.com/gists'
const getGistUrl = id => `${gistApiUrl}/${id}`

const getGistObject = files => ({
  description: 'Soundboard Export (https://github.com/sk22/redux-soundboard)',
  public: false,
  files
})

const getFile = (name, value) => ({
  [name]: {content: JSON.stringify(value)}
})

const getFiles = fields => Object.keys(fields).reduce((obj, id) => ({
  ...obj, ...getFile(`${id}.json`, fields[id])
}), {})

export const exportSoundboard = async ({
  dispatch, sounds: allSounds, soundboard, history
}) => {
  const sounds = pick(allSounds, soundboard.sounds)
  const files = getFiles({soundboard, ...sounds})
  const gist = getGistObject(files)
  const response = await fetch(gistApiUrl, {
    method: 'post',
    body: JSON.stringify(gist)
  })
  const {id} = await response.json()
  return id
}


const filterKey = str => {
  if (/https?:\/\/.*\//.test(str)) {
    return /https?:\/\/.*\/(.*)$/.exec(str)[1]
  }
  return str
}

export const importSoundboard = async ({
  dispatch, sounds: allSounds, id: originalId
}) => {
  const id = filterKey(originalId.trim())
  const url = getGistUrl(id)
  const data = await (await fetch(url)).json()

  const soundboard = JSON.parse(data.files['soundboard.json'].content)

  dispatch(addSoundboard({
    id, soundboard
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
