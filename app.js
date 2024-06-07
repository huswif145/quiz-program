#!/usr/bin/env node
import inquirer from "inquirer";
console.log('Welcome to my adventure quiz game:');
console.log("You are required to gain a maximum of 4 points to win");
(async () => {
    let points = 0;
    // Question 1
    let question1 = await inquirer.prompt([
        {
            name: "one",
            message: "TypeScript is a superset of?",
            type: "list",
            choices: ["Python", "C++", "Java", "JavaScript"]
        }
    ]);
    if (question1.one === "JavaScript") {
        console.log("Your answer is correct");
        points++;
    }
    else {
        console.log("Incorrect answer");
    }
    // Question 2
    let question2 = await inquirer.prompt([
        {
            name: "two",
            message: "Who is the founder of Microsoft?",
            type: "list",
            choices: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Saim"]
        }
    ]);
    if (question2.two === "Bill Gates") {
        console.log("Your answer is correct");
        points++;
    }
    else {
        console.log("Incorrect answer");
    }
    // Question 3
    let question3 = await inquirer.prompt([
        {
            name: "three",
            message: "What is the capital of Pakistan?",
            type: "list",
            choices: ["Islamabad", "Lahore", "Quetta", "Karachi"]
        }
    ]);
    if (question3.three === "Islamabad") {
        console.log("Your answer is correct");
        points++;
    }
    else {
        console.log("Incorrect answer");
    }
    // Question 4
    let question4 = await inquirer.prompt([
        {
            name: "four",
            message: "Who is the current governor of Sindh?",
            type: "list",
            choices: ["Ali", "Kamran Tessori", "Rahim", "Saim"]
        }
    ]);
    if (question4.four === "Kamran Tessori") {
        console.log("Your answer is correct");
        points++;
    }
    else {
        console.log("Incorrect answer");
    }
    // Question 5
    let question5 = await inquirer.prompt([
        {
            name: "five",
            message: "Who is the current Prime Minister of Pakistan?",
            type: "list",
            choices: ["Imran Khan", "Shahbaz Sharif", "Sikandar Mirza", "Yahya Khan"]
        }
    ]);
    if (question5.five === "Shahbaz Sharif") {
        console.log("Your answer is correct");
        points++;
    }
    else {
        console.log("Incorrect answer");
    }
    // Output conditions
    console.log(`Your points: ${points}`);
    if (points >= 4) {
        console.log("Congratulations!");
    }
    else {
        console.log("You lose! Try next time");
    }
})();
