const fs = require('fs');

const getNotes = function () {
  return 'Your notes...';
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((notes) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(`${title} note added!`);
  } else {
    console.log(`${title} note title already exists. Please choose a different title.`);
  }

}

const removeNote = function (title) {
  const notes = loadNotes();

  // Refactor to-do
  // const notesData = JSON.stringify(notes);

  // if (!noteTitles.title) {
  //   console.log(`${title} note does not exist.`);
  // } else {

  const result = notes.filter((note) => note.title !== title);
  
  saveNotes(result);
  console.log(`${title} note removed.`);
}

const saveNotes = function (notes) {
  const notesData = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesData);
}

const loadNotes = function () {
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