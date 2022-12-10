const fs = require('fs')
const path = require('path')

const { headPoints, tailPoints, move } = require("./puzzle-09")


const data = fs.readFileSync(path.join(__dirname, 'testData.txt'), {encoding: 'utf8'})
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim()
  .split('\n')

const moves = data.map(line => {
  const movement = line.split(' ')
  return {
    direction: movement[0],
    steps: movement[1]
  }
})


describe('Day 8', () => {
  it('After movement One R4', () => {
    move(moves[0])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: 0, y: 4 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: 0, y: 3 })  
  })
  it('After movement Two U4', () => {
    move(moves[1])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -4, y: 4 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -3, y: 4 })  
  })
  it('After movement Three L3', () => {
    move(moves[2])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -4, y: 1 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -4, y: 2 })  
  })
  it('After movement Four D1', () => {
    move(moves[3])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -3, y: 1 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -4, y: 2 })  
  })
  it('After movement Five R4', () => {
    move(moves[4])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -3, y: 5 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -3, y: 4 })  
  })
  it('After movement Six D1', () => {
    move(moves[5])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -2, y: 5 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -3, y: 4 })  
  })
  it('After movement Seven L5', () => {
    move(moves[6])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -2, y: 0 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -2, y: 1 })  
  })
  it('After movement Eight R2', () => {
    move(moves[7])
    expect(headPoints[headPoints.length-1]).toStrictEqual({ x: -2, y: 2 })
    expect(tailPoints[tailPoints.length-1]).toStrictEqual({ x: -2, y: 1 })  
  })
  it('Part 1. Number of unique visited points are:', () => {
    const visited = tailPoints.filter((v,i,a)=>a.findIndex(v2=>['x','y'].every(k=>v2[k] ===v[k]))===i)       
    expect(visited.length).toBe(13)
  })
})