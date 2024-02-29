const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber = 9

function checkGuess(num) {

    if ( num > secretNumber ) {
        console.log('Too High.')
        return false
    } else if ( num < secretNumber ) {
        console.log('Too Low.')
        return false
    } else if ( num == secretNumber ) {
        return true
    }
}

function askGuess() {
    rl.question('Enter a guess: ', (ans) => {
        if ( checkGuess(ans) ) {
            console.log('You win!');
            rl.close();
        } else {
            console.log("Try again.")
            askGuess();
        }
    });
};

askGuess();
