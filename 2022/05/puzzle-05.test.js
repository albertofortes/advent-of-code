const { move, extractInstruction } = require("./puzzle-05")

const instructions = [
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2'
]

const stacks = [
  [ 'Z', 'N'],
  [ 'M', 'C', 'D' ],
  [ 'P' ]
]


describe('Day 5', () => {
  it('Part 1', () => {
    expect(move(stacks, extractInstruction(instructions[0]))).toBe([ [ 'Z', 'N', 'D' ], [ 'M', 'C' ], [ 'P' ] ])
  });
});