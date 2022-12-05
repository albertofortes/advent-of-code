const { totalScore, totalScoreInresponse } = require("./puzzle-02")

const test = ['A Y', 'B X', 'C Z']

const data = test.map(round => round.replace(/\s/g, ""))

describe('Day 2', () => {
  it('Part 1', () => {
    expect(totalScore(data)).toBe(15);
  });

  it('part 2', () => {
    expect(totalScoreInresponse(data)).toBe(12);
  });
});
