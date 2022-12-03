const fs = require('fs')
const path = require('path')

// A for Rock, B for Paper, and C for Scissors. 
const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'})
  .split('\n')
  .map(round => round.replace(/\s/g, ""))

/**
 * part 1
 * 
 * @param {*} round 
 * @returns {number} roundScore
 */
const calculateRoundScore = round => {
  let roundScore = 0

  switch (round[0]) {
    case 'A':
      // Rock.

      switch (round[1]) {
        case 'X':
          // Rock (1 point)
          // draw (3 points)
          roundScore = 4
          break

        case 'Y':
          // Paper (2 points) 
          // win (6 points)
          roundScore = 8
          break
    
        case 'Z':
          // Scissors (3 points)
          // lost (0 points)
          roundScore = 3
          break
    
        default:
          break;
      }

      break;

    case 'B':
      // Paper.

      switch (round[1]) {
        case 'X':
          // Rock (1 point)
          // lost (0 points)
          roundScore = 1
          break

        case 'Y':
          // Paper (2 points
          // draw (3 points)
          roundScore = 5
          break
    
        case 'Z':
          // Scissors (3 points)
          // win (6 points)
          roundScore = 9
          break
    
        default:
          break;
      }

      break;

    case 'C':
      // Scissors.

      switch (round[1]) {
        case 'X':
          // Rock (1 point)
          // win (6 points)
          roundScore = 7
          break

        case 'Y':
          // Paper (2 points)
          // lost (0 points)
          roundScore = 2
          break
    
        case 'Z':
          // Scissors (3 points)
          // draw (3 points)
          roundScore = 6
          break
    
        default:
          break;
      }

      break;

    default:
      break;
  }

  return roundScore
}

/**
 * Part 2
 * 
 * @param {*} round 
 */
const chooseHand = round => {
  let roundScore = 0

  switch (round[1]) {
    case 'X':
      // I need to lose (0 points)
      switch (round[0]) {
        case 'A':
          // he rocks then I select Scissors (3 point)
          roundScore = 3
          break

        case 'B':
          // he paper then I select rock (1 points)
          roundScore = 1
          break
    
        case 'C':
          // he Scissors then I select paper (2 points)
          roundScore = 2
          break
    
        default:
          break;
      }

      break;

    case 'Y':
      // I need to draw (3 points)
      switch (round[0]) {
        case 'A':
          // then I select Rock (1 point)
          roundScore = 4
          break

        case 'B':
          // then I select Paper (2 points)
          roundScore = 5
          break
    
        case 'C':
          // then I select Scissors (3 points)
          roundScore = 6
          break
    
        default:
          break;
      }

      break;

    case 'Z':
      // I need to win (6 points)
      switch (round[0]) {
        case 'A':
          // he rocks then I select paper (2 point)
          roundScore = 8
          break

        case 'B':
          // he paper then I select Scissors (3 points)
          roundScore = 9
          break
    
        case 'C':
          // then I select Rock 1 points)
          roundScore = 7
          break
    
        default:
          break;
      }

      break;

    default:
      break;
  }

  return roundScore
}

/**
 * 1st column (round[0]) what your opponent is going to play
 * 2nd column (round[1]) what you should play in response
 */
const totalScore = data => data.reduce((accumulator, round) => parseInt(accumulator + calculateRoundScore(round)), [0])

/**
 * 1st column (round[0]) what your opponent is going to play
 * 2nd column (round[1]) what you should play in response
 */
const totalScoreInresponse = data => data.reduce((accumulator, round) => parseInt(accumulator + chooseHand(round)), [0])

module.exports = { totalScore, totalScoreInresponse }

//console.log(`Part 1: ${totalScore(data)}`)
//console.log(`Part 2: ${totalScoreInresponse(data)}`)