const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'})
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim()
  .split('\n')
  .map(line => [...line].map(Number))

const aVisibleTrees = new Set() // so avoid adding duplicates

/**
 * Add trees (their coordinates) to the aVisibleTress Set
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} aVisibleTrees 
 */
const setVisible = (row, col, aVisibleTrees) => aVisibleTrees.add(`${row}*${col}`)

/**
 * It check a grid element respect the previous /next one, horizontally or vertically depends on 3rd and 4rd parameter
 * 
 * @param {Number} row starting line/row
 * @param {Number} col starting column
 * @param {Number} rowDirection of the row (-1 goes to up, 0 to the bottom)
 * @param {Number} colDirection of the row (-1 goes to the left to the right, 0 from left to right as regular behv)
 * @param {array} grid data
 * @param {array} aVisibleTrees
 */
const lineChecker = (row, col, rowDirection, colDirection, grid, aVisibleTrees) => {
  setVisible(row, col, aVisibleTrees)
  let tallest = grid[row][col]

  for(let i = 0; i < grid.length; i++) {
    row += rowDirection
    col += colDirection

    if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) break

    if(grid[row][col] > tallest) {
      tallest = grid[row][col]
      setVisible(row, col, aVisibleTrees)
    }
  }
}

const visibleTrees = grid => {
  for (let i = 0; i < grid.length; i++) {
    lineChecker(i, 0, 0, 1, grid, aVisibleTrees);
    lineChecker(i, grid[0].length - 1, 0, -1, grid, aVisibleTrees)
  }
  // cols:
  for (let i = 0; i < grid[0].length; i++) {
    lineChecker(0, i, 1, 0, grid, aVisibleTrees);
    lineChecker(grid.length - 1, i, -1, 0, grid, aVisibleTrees)
  }
}

const scenicScore = grid => {
  // part 2 TO DO
}

module.exports = { aVisibleTrees, lineChecker } 

//console.log(data)
//console.log(lineChecker(2, 4, 0, -1, data, aVisibleTrees))
visibleTrees(data)
console.log(`Part 1: visible trees are ${aVisibleTrees.size}`)