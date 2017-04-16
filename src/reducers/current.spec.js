import current from './current'
import {setCurrentSoundboard, setCurrentView} from '../actions'

describe('current reducer', () => {
  it('returns correct initial state', () => {
    const result = current(undefined, {})
    expect(result).toEqual({soundboard: 0, view: 'soundboards'})
  })

  it('sets current soundboard', () => {
    const result = current(undefined, setCurrentSoundboard(2))
    expect(result).toEqual({soundboard: 2, view: 'soundboards'})
  })

  it('sets current view', () => {
    const result = current(undefined, setCurrentView('addSound'))
    expect(result).toEqual({soundboard: 0, view: 'addSound'})
  })
})
