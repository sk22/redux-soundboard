import soundboards from './soundboards'
import {
  addSoundboard,
  addSoundToSoundboard,
  deleteSoundboard,
  updateSoundboard
} from '../actions'

describe('soundboards reducer', () => {
  it('returns correct initial state', () => {
    const result = soundboards(undefined, {})
    expect(result).toEqual({0: {name: 'Default', sounds: [], locked: false}})
  })

  it('adds a soundboard', () => {
    const result = soundboards(undefined, addSoundboard({name: 'Foo'}))
    expect(result).toEqual({
      0: {name: 'Default', sounds: [], locked: false},
      1: {name: 'Foo', sounds: [], locked: false}
    })
  })

  it('adds a sound to a soundboard', () => {
    const state = {
      0: {name: 'Default', sounds: [], locked: false},
      1: {name: 'Foo', sounds: [2, 1], locked: false}
    }
    const result = soundboards(state, addSoundToSoundboard({
      sound: 0,
      soundboard: 1
    }))
    expect(result).toEqual({
      0: {name: 'Default', sounds: [], locked: false},
      1: {name: 'Foo', sounds: [2, 1, 0], locked: false}
    })
  })

  it('deletes a soundboard', () => {
    const state = {
      0: {name: 'Default', sounds: [], locked: false},
      1: {name: 'Foo', sounds: [], locked: false}
    }
    const result = soundboards(state, deleteSoundboard(0))
    expect(result).toEqual({
      1: {name: 'Foo', sounds: [], locked: false}
    })
  })

  it('updates a soundboard', () => {
    const state = {
      0: {name: 'Default', sounds: [], locked: false},
      1: {name: 'Foo', sounds: [], locked: false}
    }
    const result = soundboards(state, updateSoundboard({
      soundboard: 1,
      update: {name: 'Bar'}
    }))
    expect(result).toEqual({
      0: {name: 'Default', sounds: [], locked: false},
      1: {name: 'Bar', sounds: [], locked: false}
    })
  })

  it('increments keys based on last key\'s value', () => {
    const state = {
      1: {name: 'Foo', sounds: [], locked: false}
    }
    const result = soundboards(state, addSoundboard({name: 'Bar'}))
    expect(result).toEqual({
      1: {name: 'Foo', sounds: [], locked: false},
      2: {name: 'Bar', sounds: [], locked: false}
    })
  })

  it('starts with 0 when all deleted', () => {
    const result = soundboards({}, addSoundboard(
      {name: 'Zero', sounds: [], locked: false}
    ))
    expect(result).toEqual({0: {name: 'Zero', sounds: [], locked: false}})
  })

  it('adds default soundboard when no payload given', () => {
    const result = soundboards({}, addSoundboard())
    expect(result).toEqual({
      0: {
        name: 'New Soundboard',
        sounds: [],
        locked: false
      }
    })
  })
})
