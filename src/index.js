/** @module app */
import inquirer from 'inquirer';
import chalk from 'chalk';
import clear from 'clear';

const out = txt => console.log(txt);

const FormatTxt = {
    white: txt => chalk.keyword('white').bold(txt),
    red: txt => chalk.keyword('red').bold(txt),
    redStar: txt => chalk.keyword('white').bgHex('ff5454').bold(txt),
    menuRed: txt => chalk.keyword('white').bgHex('ff5454').bold(txt),
    menuOrange: txt => chalk.keyword('white').bgHex('ff8754').bold(txt),
    menuYellow: txt => chalk.keyword('white').bgHex('ffdd54').bold(txt),
    menuGreen: txt => chalk.keyword('white').bgHex('9fe88b').bold(txt),
    menuAqua: txt => chalk.keyword('white').bgHex('81debc').bold(txt),
    menuBlue: txt => chalk.keyword('white').bgHex('92c1f7').bold(txt),
    menuPurple: txt => chalk.keyword('white').bgHex('9295f7').bold(txt),
    menuPink: txt => chalk.keyword('white').bgHex('f792f0').bold(txt),
    pinkStar: txt => chalk.keyword('white').bgHex('f792f0').bold(txt),
    helpCommand: txt => chalk.hex('#f5f0f0').bgHex('#ff6600').bold(txt),
};

const createMenu = () => {
    clear();
    const menuRows = Object.keys(menu);
    //★_|_  _   _|  _    ._ _   _  ._      
    //  |_ (_) (_| (_)   | | | (/_ | | |_|★ -- mini font
    let output = ' \n';     
    output += FormatTxt.redStar('♡') + FormatTxt.menuRed('_|_ ') + FormatTxt.menuOrange(' _  ') + FormatTxt.menuYellow(' _| ') + FormatTxt.menuGreen(' _  ') + FormatTxt.menuAqua(' ._ _  ') + FormatTxt.menuBlue(' _  ') + FormatTxt.menuPurple('._  ') + FormatTxt.menuPink('     ') + '\n';
    output += FormatTxt.menuRed('  |_ ') + FormatTxt.menuOrange('(_) ') + FormatTxt.menuYellow('(_| ') + FormatTxt.menuGreen('(_) ') + FormatTxt.menuAqua(' | | | ') + FormatTxt.menuBlue('(/_ ') + FormatTxt.menuPurple('| | ') + FormatTxt.menuPink('|_|') + FormatTxt.pinkStar('♡ ') + '\n';
    out(output);
    // menuRows.forEach(row => out(FormatTxt.white(`${row}\t${menu[row].description}\n`)));
    displayMenu();
};

const createError = () => {
    const helpTxt = FormatTxt.helpCommand("todo help");
    out(FormatTxt.red(`Please enter a valid command or type ${helpTxt}`));
};

const menu = {
    help: {
        name: 'help',
        description: 'displays the menu',
        func: createMenu,
    },
    clear: {
        name: 'clear',
        description: 'clear the terminal',
        func: clear,
    },
    quit: {
        name: 'quit',
        description: 'quit todos',
        func: process.exit,
    },
    add: {
        name: 'add',
        description: 'add a todo',
        func: createError,
    }
};

const menuPrompt = {
    type: 'list',
    name: 'menu',
    message: 'What do you want to do?',
    choices: ['add a todo', 'clear', 'quit'],
};

const main = () => {
    const arg = process.argv[2];
    const operation = menu[arg] || menu.help;
    console.log('op', operation);
    // const operation = menu[arg]?.func || (() => createError());
    operation.func();
};

const displayMenu = () => {
    inquirer.prompt(menuPrompt).then((answers) => {
        if (answers.menu === 'clear') {
            clear();
        } else if (answers.menu === 'quit') {
            process.exit;
        } else {
            addTodo();
        }
    });
};

const addTodo =() => {
    inquirer.prompt({
        type: 'input',
        name: 'date',
        message: 'Enter date due',
    }).then((answers) => {
        console.log(answers);
    });
}


// const prompt = async () => {
//     const input = await genInput(menuSelect(Menu));
//     await Menu[input].func();
//     prompt();
// };

// const genInput = async (input) => {
//     const inp = await inquirer.prompt(input);
//     return inp.value;
// };

// const menuSelect = () => ({
//     name: 'value',
//     message: 'wat do u want?',
// });

// createMenu(Menu);
// prompt();

main();

//END OF FILE sdfsdf sdfsdf 