
export function formatTime (time) {
  let leftPart = parseInt(time / 1000)
  if (leftPart < 10) {
    leftPart = String('0' + leftPart).slice(-2)
  }

  const rightPart = String('0' + parseInt(time / 10)).slice(-2)

  return leftPart + '.' + rightPart
}
