const fs = require('fs')
const path = require('path')

const { lineChecker, aVisibleTrees } = require("./puzzle-08")

const testData = fs.readFileSync(path.join(__dirname, 'testData.txt'), {encoding: 'utf8'})
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim()
  .split('\n')
  .map(line => [...line].map(Number))


describe('Day 8', () => {
  it('Visible as they are edges', () => {
    lineChecker(0, 0, 0, 1, testData, aVisibleTrees)
    expect(aVisibleTrees.has('0*0')).toBe(true)
    expect(aVisibleTrees.has('0*2')).toBe(true)
    expect(aVisibleTrees.has('0*3')).toBe(true)

    lineChecker(2, 4, 0, -1, testData, aVisibleTrees)
    expect(aVisibleTrees.has('2*4')).toBe(true)
    expect(aVisibleTrees.has('2*3')).toBe(true)
    expect(aVisibleTrees.has('2*2')).toBe(false)
    expect(aVisibleTrees.has('2*1')).toBe(true)
    expect(aVisibleTrees.has('2*0')).toBe(true)
  })
})