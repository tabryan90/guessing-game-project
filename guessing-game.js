const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber;
let count = 0;

function asklimit() {
        rl.question('How many times would you like to guess? ', limit => {
            askRange(Number(limit));
        });
};


function askRange(limit) {
    // console.log('AskRange - Limit: ' + limit)
    rl.question('Enter a min number: ', min => {
        rl.question('Enter a max number: ', max => {
            askGuess(randomInRange(min, max), count, limit)
        })
    });
};

function randomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    secretNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    console.log(`I'm thinking of a number between ${min} and ${max}...`)
    return secretNumber;
};

function askGuess(secretNumber, count, limit) {
    // console.log('AskGuess - Limit: ' + typeof(limit) + '. Count: ' + typeof(count))
    if ( count === limit ) {
        console.log(`*Game Over* - No More Guess Available - Play Again`);
        rl.close();
    } else if ( count === limit - 1 ) {
        console.log(`Last Guess - Guess Wisely`);

        rl.question('Enter a guess: ', ans => {
            if ( checkGuess(ans, secretNumber) ) {
                console.log('You win!');
                rl.close();
            } else {
                count++;
                askGuess(secretNumber, count, limit);
            }
        });

    } else {

        rl.question('Enter a guess: ', ans => {
            if ( checkGuess(ans, secretNumber) ) {
                console.log('You win!');
                rl.close();
            } else {
                count++;
                askGuess(secretNumber, count, limit);
            }
        });
    }
};

function checkGuess(num, secretNumber) {

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

// console.log(randomInRange(15, 20))
// askGuess();
// askRange();
asklimit();
