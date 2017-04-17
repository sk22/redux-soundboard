import sounds from './sounds'
import {addSound, deleteSound} from '../actions'

describe('sounds reducer', () => {
  it('returns correct initial state', () => {
    const result = sounds(undefined, {})
    expect(result).toEqual({0: {name: 'Beep', src: '/beep.mp3'}})
  })

  it('adds a sounds', () => {
    const result = sounds(undefined, addSound({name: 'Foo', src: '/x.wav'}))
    expect(result).toEqual({
      0: {name: 'Beep', src: '/beep.mp3'},
      1: {name: 'Foo', src: '/x.wav'}
    })
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

  it('starts with 0 when all deleted', () => {
    const result = sounds({}, addSound({name: 'Zero', src: '/'}))
    expect(result).toEqual({0: {name: 'Zero', src: '/'}})
  })

  it('increments keys based on last key\'s value', () => {
    const state = {
      1: {name: 'Foo', src: '/x.wav'}
    }
    const result = sounds(state, addSound({name: 'Bar', src: '/y.ogg'}))
    expect(result).toEqual({
      1: {name: 'Foo', src: '/x.wav'},
      2: {name: 'Bar', src: '/y.ogg'}
    })
  })
})
