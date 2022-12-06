const { checker } = require("./puzzle-06")

const testA1 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
const testA2 = 'nppdvjthqldpwncqszvftbrmjlhg'
const testA3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
const testA4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
const testB1 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
const testB2 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
const testB3 = 'nppdvjthqldpwncqszvftbrmjlhg'
const testB4 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
const testB5 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'

describe('Day 6', () => {
  it('Part 1', () => {
    expect(checker(testA1, 4)).toBe(5)
    expect(checker(testA2, 4)).toBe(6)
    expect(checker(testA3, 4)).toBe(10)
    expect(checker(testA4, 4)).toBe(11)
  });

  it('Part 2', () => {
    expect(checker(testB1, 14)).toBe(19)
    expect(checker(testB2, 14)).toBe(23)
    expect(checker(testB3, 14)).toBe(23)
    expect(checker(testB4, 14)).toBe(29)
    expect(checker(testB5, 14)).toBe(26)
  });
});
