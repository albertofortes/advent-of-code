const fs = require('fs')

let i = 0

const aCalories = fs.readFileSync('input.txt', {encoding: 'utf8'})
  .split('\n')
  .map(calories => parseInt(calories))
  .reduce((accumulator, calories) => {
    if(isNaN(calories)) {
      i++
      accumulator[i] = 0
      return accumulator
    }

    accumulator[i] += calories
    return accumulator
  }, [0])

const maxCalories = Math.max(...aCalories)

const topThreeElvesCalories = aCalories
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((accumulator, calories) => accumulator + calories, 0)

//console.log(aCalories.sort((a, b) => b - a))
console.log(`Part 1. The Elf carrying the most Calories, is carrying: ${maxCalories} calories`)
console.log(`Part 2. The top 3 elves are carrying: ${topThreeElvesCalories} calories`)