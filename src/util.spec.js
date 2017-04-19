import {
  getHighestKey,
  randomDigit,
  generateString
} from './util'

describe('get highest key', () => {
  it('does its job', () => {
    const state = {1: {}, 5: {}, 4: {}}
    expect(getHighestKey(state)).toBe(5)
  })
})

describe('random digit', () => {
  it('generates a random digit for the given base', () => {
    expect(['0', '1', '2', '3', '4', '5', '6', '7', '8',
      '9', 'a', 'b', 'c', 'd', 'e', 'f']).toContain(randomDigit(16))
  })
})

describe('generate string', () => {
  it('generates a string made of random digits', () => {
    expect(generateString(16)(32).length).toBe(32)
  })
})
