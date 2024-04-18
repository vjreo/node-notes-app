const chalk = require('chalk');
const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

const greenMsg = chalk.blue.inverse.bold('Success!');
console.log(greenMsg);

console.log(process.argv[2]);