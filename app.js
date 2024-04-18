const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0');

// add, remove, list, read notes
yargs.command({
  command: 'add',
  describe: 'Add a note',
  handler: function () {
    console.log('Adding a new note...');
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing note...');
  }
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('Listing all notes...');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler: function () {
    console.log('Reading notes...');
  }
});

console.log(yargs.argv);