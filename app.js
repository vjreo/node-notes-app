const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

// Handlers for note actions
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    console.log(`Adding note...\nTitle: ${argv.title}`);
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler() {
    console.log('Removing note...');
  },
  handler (argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log('Listing all notes...');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler() {
    console.log('Reading notes...');
  }
});

yargs.parse();