const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
}

const addNote = (title, body) => {
  const notes = loadNotes();
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
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green(`${title} note removed.`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red(`${title} note not found.`))
  }
}

const saveNotes = (notes) => {
  const notesData = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesData);
}

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json');
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}