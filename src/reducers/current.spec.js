import current from './current'
import {
  setCurrentSoundboard,
  setCurrentView,
  setShowShare,
  setShowImport,
  setShareUrl,
  resetShare,
  setImporting
} from '../actions'
describe('current reducer', () => {
  it('returns correct initial state', () => {
    const result = current(undefined, {})
    expect(result).toEqual({
      soundboard: 0,
      view: 'soundboards',
      showShare: false,
      showImport: false,
      url: null,
      importing: false
    })
  })

  it('sets current soundboard', () => {
    const result = current(undefined, setCurrentSoundboard(2))
    expect(result).toMatchObject({soundboard: 2, view: 'soundboards'})
  })

  it('sets current view', () => {
    const result = current(undefined, setCurrentView('addSound'))
    expect(result).toMatchObject({soundboard: 0, view: 'addSound'})
  })

  it('sets the share popup show state', () => {
    const result = current(undefined, setShowShare(true))
    expect(result.showShare).toBe(true)
  })

  it('sets the import popup show state', () => {
    const result = current(undefined, setShowImport(true))
    expect(result.showImport).toBe(true)
  })

  it('sets the share url', () => {
    const result = current({showShare: true}, setShareUrl('https://google.com'))
    expect(result.url).toBe('https://google.com')
  })

  it('sets if importing', () => {
    const result = current(undefined, setImporting(true))
    expect(result.importing).toBe(true)
  })

  it('resets the share state', () => {
    const result = current({showShare: true}, resetShare())
    expect(result).toMatchObject({
      showShare: false,
      showImport: false,
      url: null
    })
  })
})
