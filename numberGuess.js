/*
Name: BELEN, Mariane I.
Course&Section: BSCS 1B
Activity No. Perf2
File: numberGuess.js
*/

//Crete let variable to store the number we are going to guess
let numberGuess = 7;
let number = 0;  //another let variable to use in the while loop and make it =0

//create while loop in order to know if our guess is wrong or correct if wrong it will ask again.
while (number !== numberGuess){
    //Use the number variable from above & use prompt to asl for the number snd convert it into number.
    number = Number(prompt('Guess the number from 1 - 10:'));

    //Use if else statement in order to know our guess is to high, too lor and correct.
    if (isNaN(number)){  //this will check if what you inputed is a number or not.
        console.log('Invalid') //if its not a number then it will display this
    } else if (number < numberGuess){  //if the number that the users is less than the numberGuess then it is Too low
        console.log('Too low!');
    } else if (number > numberGuess){ //if the number is greater than numberGuess then it is too high 
        console.log('Too high!'); 
    } else{  //if it got the correct number then it will display the else statement
        console.log('Correct!');
    }
}