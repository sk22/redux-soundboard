export const getHighestKey = state => {
  const keys = Object.keys(state)
  if (keys.length === 0) return -1
  return Number(keys[keys.length - 1])
}

export const randomDigit = base =>
  Math.floor(Math.random() * base).toString(base)

export const generateString = base => length => (
  '0'.repeat(length).replace(/0/g, () => randomDigit(base))
)
