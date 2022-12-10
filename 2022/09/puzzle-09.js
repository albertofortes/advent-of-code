const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'})
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim()
  .split('\n')

const moves = input.map(line => {
  const movement = line.split(' ')
  return {
    direction: movement[0],
    steps: movement[1]
  }
})



let headPoints = [
  {
    x: 0,
    y: 0
  }
]

let tailPoints = [
  {
    x: 0,
    y: 0
  }
]

const _distanceChecker = (head, tail) => {
  const headX = headPoints[headPoints.length - 1]['x']
  const headY = headPoints[headPoints.length - 1]['y']
  const tailX = tailPoints[tailPoints.length - 1]['x']
  const tailY = tailPoints[tailPoints.length - 1]['y']

  const distance = Math.max(
    Math.abs(tailX - headX),
    Math.abs(tailY- headY)
  )

  return (distance > 1) ? true : false
}

const move = instruction => {
  let headX
  let headY
  let tailX
  let tailY

  for(let i = 0; i < instruction.steps; i++) {
    let shouldMove = false

    headX = headPoints[headPoints.length - 1]['x']
    headY = headPoints[headPoints.length - 1]['y']
    tailX = tailPoints[tailPoints.length - 1]['x']
    tailY = tailPoints[tailPoints.length - 1]['y']  

    switch ((instruction.direction).toUpperCase()) {
      case 'R':
        headPoints.push({ x: headX, y: headY +=1 })
        shouldMove =  _distanceChecker(headPoints, tailPoints)
        if(shouldMove) tailPoints.push({ x: headX, y: tailY +=1 })

        break;

      case 'L':
        headPoints.push({ x: headX, y: headY -=1 })
        shouldMove =  _distanceChecker(headPoints, tailPoints)
        if(shouldMove) tailPoints.push({ x: headX, y: tailY -=1 })

        break;

      case 'U':
        headPoints.push({ x: headX -=1, y: headY })
        shouldMove =  _distanceChecker(headPoints, tailPoints)
        if(shouldMove) tailPoints.push({ x: tailX -=1, y: headY })

        break;

      case 'D':
        headPoints.push({ x: headX +=1, y: headY })
        shouldMove =  _distanceChecker(headPoints, tailPoints)
        if(shouldMove) tailPoints.push({ x: tailX +=1, y: headY })

        break;

      default:
        break;
    }
  }
}


for(let i = 0; i < moves.length; i++) {
  move(moves[i])
}

const visited = tailPoints.filter((v,i,a)=>a.findIndex(v2=>['x','y'].every(k=>v2[k] ===v[k]))===i)


module.exports = { headPoints, tailPoints, move } 

console.log('TAIL: ', tailPoints.length)
console.log('Visited: ', visited.length)

