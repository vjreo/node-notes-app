const chalk = require('chalk');
const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json');
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
}

const notes = loadNotes();

const addNote = (title, body) => {
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green(`${title} note added!`));
  } else {
    console.log(chalk.inverse.red(`${title} note title already exists. Please choose a different title.`));
  }
}

const removeNote = (title) => {
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green(`${title} note removed.`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red(`${title} note not found.`))
  }
}

const listNotes = () => {
  const name = prompt("Enter your name: ");
  console.log(chalk.blue.bgWhite.bold(`${name}'s notes:`));

  if (notes.length <= 0) {
    console.log(`No notes to list for ${name}.`);
  } else {
    notes.forEach((note) => console.log(`\n- ${note.title}\n`));
  }
}

const saveNotes = (notes) => {
  const notesData = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesData);
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
}