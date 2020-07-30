/** @module utils */
import chalk from 'chalk';

/**
 * @constant {Object} FormatTxt - Chalk formatter.
 */
const FormatTxt = {
    white: (txt) => chalk.keyword('white').bold(txt),
    red: (txt) => chalk.keyword('red').bold(txt),
    redStar: (txt) => chalk.keyword('white').bgHex('ff5454').bold(txt),
    menuRed: (txt) => chalk.keyword('white').bgHex('ff5454').bold(txt),
    menuOrange: (txt) => chalk.keyword('white').bgHex('ff8754').bold(txt),
    menuYellow: (txt) => chalk.keyword('white').bgHex('ffdd54').bold(txt),
    menuGreen: (txt) => chalk.keyword('white').bgHex('9fe88b').bold(txt),
    menuAqua: (txt) => chalk.keyword('white').bgHex('81debc').bold(txt),
    menuBlue: (txt) => chalk.keyword('white').bgHex('92c1f7').bold(txt),
    menuPurple: (txt) => chalk.keyword('white').bgHex('9295f7').bold(txt),
    menuPink: (txt) => chalk.keyword('white').bgHex('f792f0').bold(txt),
    pinkStar: (txt) => chalk.keyword('white').bgHex('f792f0').bold(txt),
    helpCommand: (txt) => chalk.hex('#f5f0f0').bgHex('#ff6600').bold(txt),
};

export default FormatTxt;
