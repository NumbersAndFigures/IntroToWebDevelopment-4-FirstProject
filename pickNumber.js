const readln = require('readline');
const commandLine = readln.createInterface( process.stdin, process.stdout );
const promptForNumber = (message) => {
  return new Promise((res) => {
    commandLine.question(message, response => {
      const number = Number.parseInt(response, 10);
      res(number || 0);
    });
  });
};

const end = () => {
    commandLine.close();
};
// End of provided code //

let computersNumber = 0;

const pickNumber = (max) => {
  const baseNumber = Math.random();
  const multipliedNumber = baseNumber * max;
  return Math.ceil(multipliedNumber);
};

const guessNumber = async () => {
  const answer = await promptForNumber('Pick a number: ');
  if (answer > computersNumber) {
    console.log('You guessed too high.');
    guessNumber();
  } else if (answer < computersNumber) {
    console.log('You guessed too low.');
    guessNumber();
  } else {
    console.log('You guessed my number!');
    // We picked the right number
    playAgainPrompt();
  }
};

const playAgainPrompt = async () => {
  const answer = await promptForNumber('Play again? 0 for no, 1 for yes: ');
  if (answer === 1) {
    start();
  } else {
    end();
  }
};

const start = async () => {
  const maxNumber = await promptForNumber('What is the max number? ');
  computersNumber = pickNumber(maxNumber);
  guessNumber();
};
start();


// 1) We need the computer to pick a number
// 2) We need a way for the user to guess a number
// 3) We need to check the guessed number agianst
//    the computer number and provide feedback