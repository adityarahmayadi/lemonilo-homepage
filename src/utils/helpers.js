const currencyNum = (inp) => {
  const a = inp
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .join('.')
    .split('')
    .reverse()
    .join('')
  return a
}

export const formatIDR = (value) => {
  if (!value) {
    return 'Rp 0'
  }

  if (value < 0) {
    return `-Rp ${currencyNum(String(Math.abs(value)))}`
  }
  return `Rp ${currencyNum(String(value))}`
}