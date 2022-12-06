const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf8'}).trimEnd().split(`\n\n`)


//const stacks = data[0].split("\n").map(line => [...line].filter((value, index) => index % 4 === 1 ))

const stacks = [
  ["S", "T", "H", "F", "W", "R"],
  ["S", "G", "D", "Q", "W"],
  ["B", "T", "W"],
  ["D", "R", "W", "T", "N", "Q", "Z", "J"],
  ["F", "B", "H", "G", "L", "V", "T", "Z"],
  ["L", "P", "T", "C", "V", "B", "S", "G"],
  ["Z", "B", "R", "T", "W", "G", "P"],
  ["N", "G", "M", "T", "C", "J", "R"],
  ["L", "G", "B", "W"],
];

const instructions = data[1].split("\n")

const extractInstruction = row => {
  const instruction = row.split(" ");
  const quantity = parseInt(instruction[1]);
  const from = parseInt(instruction[3] - 1) ;
  const to = parseInt(instruction[5] - 1);

  return { quantity, from, to };
}

const move = (pilas, instruction) => {
  const {quantity, from, to} = instruction
  for(let i=0; i< quantity; i++) {
    const moving = pilas[from].pop()
    pilas[to].push(moving)
  }
}


for(let i=0; i < instructions.length; i++) {
  move(stacks, extractInstruction(instructions[i]))
}


console.log('END: ', stacks)
module.exports = { move, extractInstruction }