/** @module menu */
import clear from 'clear';

const createMenu = () => {
    const menuRow = Object.keys(Menu);
    console.log('something purty here');
    console.log(menuRow);
};

const Menu = {
    help: {
        name: 'help',
        description: 'help menu',
        func: createMenu,
    },
    clear: {
        name: 'clear',
        description: 'clear term',
        func: clear,
    },
    quit: {
        name: 'quit',
        description: 'quit term',
        func: process.exit,
    },
    create: {
        name: 'create',
        description: 'create thing',
    },
    madison: {
        name: 'madison',
        description: 'hi',
        // func: exitHouse,
    }
};

export default Menu;
