import current from './current'
import {
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
      showShare: false,
      showImport: false,
      url: null,
      importing: false
    })
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
