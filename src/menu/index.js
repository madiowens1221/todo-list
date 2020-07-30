/** @module menu */
import clear from 'clear';
import outputter from 'outputter';

/**
 * @description
 */
const helpMenu = {
    help: {
        name: 'help',
        description: 'displays the menu',
        func: outputter.createMenu,
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
        func: outputter.createError,
    },
};

export default helpMenu;
