#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlue.bold("\n \t Welcome to ITproject - Todo-List Applications\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            name: "Task",
            choices: ["Add Task", "View Task", "Delete Task", "Exit"],
            message: "Enter your New Task:"
        },
    ]);
    todoList.push(addTask.Task);
    console.log(`${addTask.Task} Task added in Todo-List succesfully`);
    let addMoreTask = await inquirer.prompt([
        {
            type: "confirm",
            name: "addMoreTask",
            message: "Do you want to add more task?",
            default: "False"
        },
    ]);
    conditions = addMoreTask.addMoreTask;
}
console.log(`Your Updated Todo-list: ${todoList}`);
