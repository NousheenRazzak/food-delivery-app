import inquirer from 'inquirer'
import chalk from 'chalk'

let message = chalk.green("Hi, Welcome to Sheenz bakers.")
console.log(message);

let question = await inquirer.prompt(
    [
        {
            name: 'confirm',
            type: 'confirm',
            message: 'Are you craving for something?',
            default: 'true'
        },
        {
            name: 'menu',
            type: 'checkbox',
            message: 'What do you want to eat?',
            choices: ["Burger", "Pizza", "Sandwitch"]
        },
        {
            name: 'flavor',
            type: 'rawlist',
            message: 'What flavor you want?',
            choices: ["Chicken", "BBQ", "Tikka"]
        },
        {
            name: 'cheese',
            type: 'confirm',
            message: 'Do you want to add cheese on it?',
            default: 'true'
        },
        {
            name: 'delivery',
            type: 'list',
            message: 'Would you like to pay online or COD?',
            choices: ["Pay Online", "Cash On Delivery"]
        }
    ]
)

console.log(chalk.green(`Great! your order has been placed. It will be deliver to you within 20 minutes`));