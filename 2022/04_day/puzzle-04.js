const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'})
  .split('\n')

const createPairs = data => {
  return data.map(pair => pair.split(','))
}

const pairs = createPairs(data)

// To refactor duplicate code
const isFullyOverlapping = pair => {
  const [elfOneMin, elfOneMax] = pair[0].split("-").map(Number)
  const [elfTwoMin, elfTwoMax] = pair[1].split("-").map(Number)
  
  return (elfOneMin >= elfTwoMin && elfOneMax <= elfTwoMax) || (elfOneMin <= elfTwoMin && elfOneMax >= elfTwoMax) ? 1 : 0
}

// To refactor duplicate code
const isPartiallyOverlapping = pair => {
  const [elfOneMin, elfOneMax] = pair[0].split("-").map(Number)
  const [elfTwoMin, elfTwoMax] = pair[1].split("-").map(Number)
  
  return (elfOneMin <= elfTwoMax && elfOneMax >= elfTwoMin) ? 1 : 0
}

const fullyContainedTotal = pairs => pairs.reduce((accum, pair) =>  accum + isFullyOverlapping(pair), 0)

const partiallyOverlappingTotal = pairs => pairs.reduce((accum, pair) =>  accum + isPartiallyOverlapping(pair), 0)


module.exports = { createPairs, fullyContainedTotal, partiallyOverlappingTotal }

console.log(`Part 1: Fully contained pairs sum: ${fullyContainedTotal(pairs)}`)
console.log(`Part 2: partially overlapping pairs sum: ${partiallyOverlappingTotal(pairs)}`)