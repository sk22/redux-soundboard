export const getHighestKey = state => {
  const keys = Object.keys(state)
  return Number(keys[keys.length - 1])
}
