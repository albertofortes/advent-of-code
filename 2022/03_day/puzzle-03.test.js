const { getPriority, getItemPosition, findDuplicateItemsByCompartment, sumOfAllDuplicatedItems } = require("./puzzle-03")

const testData = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw'
]

describe('Day 3', () => {
  it('Get position of letter in a row', () => {
    expect(getItemPosition('v', testData[0])).toBe(0)
    expect(getItemPosition('Q', testData[4])).toBe(8)
  })

  it('Get priorities of each item', () => {
    expect(getPriority('a')).toBe(1)
    expect(getPriority('Z')).toBe(52)
    expect(getPriority('L')).toBe(38)
    expect(getPriority('v')).toBe(22)
  })

  it('Find duplicate items by rucksack', () => {
    expect(findDuplicateItemsByCompartment(testData[0])).toBe('p')
    expect(findDuplicateItemsByCompartment(testData[1])).toBe('L')
  })

  it('Each rucksack duplicated item priority are', () => {
    expect(getPriority(findDuplicateItemsByCompartment(testData[0]))).toBe(16)
    expect(getPriority(findDuplicateItemsByCompartment(testData[1]))).toBe(38)
    expect(getPriority(findDuplicateItemsByCompartment(testData[2]))).toBe(42)
    expect(getPriority(findDuplicateItemsByCompartment(testData[3]))).toBe(22)
    expect(getPriority(findDuplicateItemsByCompartment(testData[4]))).toBe(20)
    expect(getPriority(findDuplicateItemsByCompartment(testData[5]))).toBe(19)
  })

  it('And the priorities of those item types is', () => {
    expect(sumOfAllDuplicatedItems(testData)).toBe(157)
  })
})