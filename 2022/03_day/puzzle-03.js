const fs = require('fs')
const path = require('path')

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'})
  .split('\n')
  
const getPriority = letter => alphabet.indexOf(String(letter)) + 1

const getItemPosition = (item, rucksack) => rucksack.indexOf(String(item))

const findDuplicateItemsByCompartment = rucksack => {
  const items = Array.from(rucksack)
  const compartmentOne = items.slice(0, items.length / 2)
  const compartmentTwo = items.slice(items.length / 2)
  
  return items.filter((item, index) => compartmentOne.indexOf(item) !== -1 && compartmentTwo.indexOf(item) !== -1)[0]
}

const sumOfAllDuplicatedItems = rucksacks => rucksacks.reduce((accum, rucksack) => accum + getPriority(findDuplicateItemsByCompartment(rucksack)), 0)

module.exports = { getPriority, getItemPosition, findDuplicateItemsByCompartment, sumOfAllDuplicatedItems }


console.log(data)
console.log(`Part 1. The sum of the priorities of those item types duplicated is: ${sumOfAllDuplicatedItems(data)}`)
