const fs = require('fs')
const path = require('path')

const { createPairs, fullyContainedTotal, partiallyOverlappingTotal } = require("./puzzle-04")

const testData = fs.readFileSync(path.join(__dirname, 'testData.txt'), {encoding: 'utf8'})
  .split('\n')

describe('Day 4', () => {
  it('Create Pairs of elves', () => {
    expect(createPairs(testData)[0]).toStrictEqual(['2-4', '6-8'])
    expect(createPairs(testData)[5]).toStrictEqual(['2-6','4-8'])
  })

  it('Part 1: Fully contained pairs', () => {
    expect(fullyContainedTotal(createPairs(testData))).toBe(2)
  })

  it('Part 2: Overlapping pairs', () => {
    expect(partiallyOverlappingTotal(createPairs(testData))).toBe(4)
  })
})