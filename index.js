#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number 
// 2) User input for guessing number - Done
// 3) Compair user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answere = await inquirer.prompt([
    {
        name: "UserGueesedNumber",
        type: "number",
        message: "please guess a number between 1_6",
    },
]);
if (answere.UserGueesedNumber === randomNumber) {
    console.log("Congratulations! you guessd right number");
}
else {
    console.log("you guessd wrong number");
}
