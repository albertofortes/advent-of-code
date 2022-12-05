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

const makeGroups = rucksacks => {
  let groups = []
  for(let i=0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i, i + 3))
  }
  return groups;
}

const sumOfAllDuplicatedItems = rucksacks => rucksacks.reduce((accum, rucksack) => accum + getPriority(findDuplicateItemsByCompartment(rucksack)), 0)

const sumOfAllGroupsPriorities = rucksacks => {
  const groups = makeGroups(rucksacks)
  let sum = 0
  groups.map(group => {
    let rucksackOne = new Set([...group[0]])
    let rucksackTwo = new Set([...group[1]])
    let rucksackThree = group[2]

    for (let j = 0; j < rucksackThree.length; j++) {
      let item = rucksackThree[j]
      if (rucksackOne.has(item) && rucksackTwo.has(item)) {
        sum += getPriority(item)
        break;
      }
    }
  })

  return sum
}

module.exports = { getPriority, getItemPosition, findDuplicateItemsByCompartment, sumOfAllDuplicatedItems, makeGroups, sumOfAllGroupsPriorities }


console.log(`Part 1. The sum of the priorities of those item types duplicated is: ${sumOfAllDuplicatedItems(data)}`)
console.log(`Part 2. Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types? ${sumOfAllGroupsPriorities(data)}`)
