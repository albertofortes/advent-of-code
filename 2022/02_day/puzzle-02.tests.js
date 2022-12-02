const { totalScore, calculateRoundScore } = require("./puzzle-02");

const test = ['A Y', 'B X', 'C Z']

const data = test.map(round => round.replace(/\s/g, ""))

const result = totalScore(data);
console.log(`The result is: ${result}`);