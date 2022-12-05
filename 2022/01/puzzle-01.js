const fs = require('fs')
const path = require('path')

let i = 0

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'})
  .split('\n')
  .map(calories => parseInt(calories))

const processElvesCalories = cal => cal.reduce((accumulator, calories) => {
    if(isNaN(calories)) {
      i++
      accumulator[i] = 0
      return accumulator
    }

    accumulator[i] += calories
    return accumulator
  }, [0])

const maxElfCalories = data => Math.max(...data)

const aCalories = processElvesCalories(data)
const maxCalories = maxElfCalories(aCalories)

const topThreeElvesCalories = aCalories
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((accumulator, calories) => accumulator + calories, 0)


module.exports = { processElvesCalories, maxElfCalories }

console.log(data)
console.log(`Part 1. The Elf carrying the most Calories, is carrying: ${maxCalories} calories`)
console.log(`Part 2. The top 3 elves are carrying: ${topThreeElvesCalories} calories`)