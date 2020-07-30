/** @module app */
import helpMenu from 'menu';

/**
 * @description main.
 */
const main = () => {
    const arg = process.argv[2];
    const operation = helpMenu[arg] || helpMenu.help;
    operation.func();
};

main();
