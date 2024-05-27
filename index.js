#! /usr/bin/env node
// TO DO LIST:
import inquirer from "inquirer";
let workList = [];
let quesLoop = true;
while (quesLoop) {
    let askQue = await inquirer.prompt([
        {
            name: "Q1",
            type: "input",
            message: "What you want to add in your todo list?"
        },
        {
            name: "Q2",
            type: "confirm",
            message: "Are you sure , you wanna add more things in your todo list?",
            default: "true"
        }
    ]);
    workList.push(askQue.Q1);
    quesLoop = askQue.Q2;
    console.log(workList);
}
;
