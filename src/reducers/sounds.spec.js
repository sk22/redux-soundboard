import sounds from './sounds'
import {addSound, deleteSound} from '../actions'

describe('sounds reducer', () => {
  it('returns correct initial state', () => {
    const result = sounds(undefined, {})
    expect(result).toEqual({
      '6456590cb2cf44003074ea02603d90c3': {name: 'Beep', src: '/beep.mp3'}
    })
  })

  it('adds a sounds', () => {
    const result = sounds(undefined, addSound({name: 'Foo', src: '/x.wav'}))
    expect(Object.keys(result).length).toBe(2)
  })

  it('deletes a sound', () => {
    const state = {
      0: {name: 'Beep', src: process.env.PUBLIC_URL + '/beep.mp3'},
      1: {name: 'Foo', src: '/x.wav'}
    }

    const result = sounds(state, deleteSound(0))
    expect(result).toEqual({
      1: {name: 'Foo', src: '/x.wav'}
    })
  })
})
