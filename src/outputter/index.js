/* eslint-disable no-use-before-define */
/* eslint-disable require-jsdoc */
/** @module outputter */
import FormatTxt from 'utils';
import clear from 'clear';
import inquirer from 'inquirer';
/**
 * @description Console wrapper.
 * @param {string} txt - String to console.log.
 */
const out = (txt) => console.log(txt);

const exit = () => process.exit;

const menuPrompt = {
    type: 'list',
    name: 'menu',
    message: 'What do you want to do?',
    choices: ['add a todo', new inquirer.Separator(), 'clear', 'quit'],
};

const todoQuestions = [
    {
        type: 'input',
        name: 'description',
        message: 'What you have todo?',
    },
    {
        type: 'input',
        name: 'date',
        message: 'When is this due?',
    },
];

const createError = () => {
    const helpTxt = FormatTxt.helpCommand('todo help');
    out(FormatTxt.red(`Please enter a valid command or type ${helpTxt}`));
};

function displayMenu() {
    inquirer.prompt(menuPrompt).then((answers) => {
        if (answers.menu === 'clear') {
            clear();
        } else if (answers.menu === 'quit') {
            exit();
        } else {
            addTodo();
        }
    });
}

function addTodo() {
    inquirer.prompt(todoQuestions).then((answers) => {
        console.log(answers);
    });
}

const createMenu = () => {
    clear();
    // ★_|_  _   _|  _    ._ _   _  ._
    //   |_ (_) (_| (_)   | | | (/_ | | |_|★ -- mini font
    let output = ' \n';
    output += `${FormatTxt.redStar('♡') + FormatTxt.menuRed('_|_ ') + FormatTxt.menuOrange(' _  ') + FormatTxt.menuYellow(' _| ') + FormatTxt.menuGreen(' _  ') + FormatTxt.menuAqua(' ._ _  ') + FormatTxt.menuBlue(' _  ') + FormatTxt.menuPurple('._  ') + FormatTxt.menuPink('     ')}\n`;
    output += `${FormatTxt.menuRed('  |_ ') + FormatTxt.menuOrange('(_) ') + FormatTxt.menuYellow('(_| ') + FormatTxt.menuGreen('(_) ') + FormatTxt.menuAqua(' | | | ') + FormatTxt.menuBlue('(/_ ') + FormatTxt.menuPurple('| | ') + FormatTxt.menuPink('|_|') + FormatTxt.pinkStar('♡ ')}\n`;
    out(output);
    displayMenu();
};

export default {
    createError,
    createMenu,
};
