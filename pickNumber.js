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

const start = async () => {
  const answer = await promptForNumber('Pick a number: ');
  console.log('You picked: ', answer);
  end();
};
start();