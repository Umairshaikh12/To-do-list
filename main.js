import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: 'todos',
            type: 'input',
            message: "What you want to add in your Todos?"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addtask.todos);
    condition = addtask.addMore;
    console.log(todos);
}