#! /usr/bin/env 
import inquirer from "inquirer";
import chalk from "chalk";

let todo:string[] = [];
let condition = true;
console.log(chalk.green('\t Welcome to Todo list'))
while(condition){

let addTask = await inquirer.prompt([{

    name:'TODO',
    type:'input',
    message:'What did you want to add in your Todo list ?',
},
{
    name:'addMore',
    type:'confirm',
    message:'Do you want to add more ?',
    default:false

}]);

todo.push(addTask.TODO);
 condition = addTask.addMore
console.log( 'Your To Do list is:','\n', todo)
}


