console.log("Hello World!");

generateNumber(75);

// function ; max is parameter
function generateNumber(max) {
    // Addition = +
    // Subtraction = -
    // Multiplication = *
    // Division = /
    // Remainder = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    // if ..... else if .... else
    // Gt >, GTE > =, LT <, LTE < =, EQ =, NEQ !=, AND &&, OR ||

    if (randomNumber <= 15) {
        console.log('The number is in B.');

    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log('The number in in I.');

    } else if (randomNumber >= 31 && randomNumber <= 45) {
        console.log('The number in in N.');
    } else if (randomNumber >= 46 && randomNumber <= 60) {
        console.log('The number in in G.');
    } else if (randomNumber >= 61 && randomNumber <= 75) {
        console.log('The number in in O.');

    } else {
        console.log('The number is invalid');
    }
    
    return console.log(randomNumber);
}
