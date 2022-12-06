const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'}).split('')

const checker = (data, key) => {
  let comparator = []

  for(let i = 0; i < data.length; i++) {
    comparator.push(data[i])    
    if(comparator.length > key) comparator.shift()
    if(i >= key && new Set(comparator).size === comparator.length) return i+1
  }
}

module.exports = { checker }

console.log('Part 1: ', checker(data, 4))
console.log('Part 2: ', checker(data, 14))