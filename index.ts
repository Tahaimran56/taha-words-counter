#! /usr/bin/env node
import inquirer from "inquirer";

console.log("enter your number between 1 to 6");

const randomNumber=Math.floor(Math.random()*6+1)
const answer=await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please guess a number between 1-6:"
}
]);
if (answer.userGuessedNumber===randomNumber){
    console.log("congratulation! you guessed right number");
}
else{
     console.log("wrong guessed! try again");
}
