const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, 'testData.txt'), {encoding: 'utf8'}).trim().split('\n')


const countOutside = grid => 2 * (grid.length - 1) + 2 * (grid[0].length - 1)

const checkRowIfVisible = (row, i, tallest) => {
  //console.log('ROW: ', row, tallest)

  const visible = parseInt(row[i]) > tallest
  tallest = (visible) ? parseInt(row[i]) : tallest
 // console.log(`tree: ${row[i]} is visible? ${visible} - tallest is ${tallest}`)
  return visible
}

const countInside = grid => {
  let count = 0
  let tree = []
  let tallest = grid[1][0]

  for(let x = 1; x < grid.length - 1; x++) {
    const row = grid[x]
    
    let visible = false

    for(let y = 1; y < row.length - 1; y++) {
     // tallest = parseInt(row[y-1])
      visible = checkRowIfVisible(row, y, tallest)
      if(visible) {
        count += 1
        
        tree.push(`${x}*${y}`)
        //tree[0] = x
       // tree[1] = y
       // console.log(`Row ${x} visible is tree ${tree}`)
      }
    }

    tallest = parseInt(grid[1][row.length - 1])

    for(let y = row.length - 2; y > 1; y--) {
      tallest = parseInt(row[y + 1])
      console.log('inverse tallest: ', row, row[y], tallest)
      visible = checkRowIfVisible(row, y, tallest)
      //const visible = parseInt(row[y]) > tallest
      //tallest = (visible) ? row[y] : tallest

      if(visible && !tree.includes(`${x}*${y}`)) {
       // console.log('entra', tallest);
        count += 1
        tree.push(`${x}*${y}`)
      }
    } 
    /*
    for(let col = 1; col < grid[0].length - 1; col ++) {

    }*/
  }

  console.log(`Visible from the Inside are: ${count} and trees coord are ${tree}`)
}

/*
const countGrid = grid => {
  const gridSideSize = grid.length
  let countRow = 0
  let coords = [0,0]

  let tallestInRow =  parseInt(grid[0][0])
  let tallestInCol =  parseInt(grid[0][0])

  for(let i = 1; i < gridSideSize - 1; i++) {
    for(let j = 1; j < gridSideSize - 1; j++) {
      const tree = parseInt(grid[i][j])
      let tallestInCol = parseInt(grid[i][j-1])
      let tallestInRow = parseInt(grid[i-1][j])

      console.log(`TREE: ${tree} - from ${grid[i]} - AND comparing with: ${tallestInRow} and ${tallestInCol}`)

      

      if(tree > tallestInRow || tree > tallestInCol) {
        if(tree > tallestInRow) tallestInRow = tree
        if(tree > tallestInCol) tallestInCol = tree
        countRow += 1
        coords[0]= i
        coords[1]= j
        console.log('coords: ', coords)
        break
      }
    }
  }
  console.log('countRow = ', countRow)
  return countRow
}
*/
module.exports = { countOutside, countInside }

console.table(data)
//console.log( countOutside(data) )
//countInside(data)
//countGrid(data)