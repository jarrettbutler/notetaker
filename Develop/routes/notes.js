const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the feedback
notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


// POST Route for a new note
notes.post('/', (req, res) => {
  const { noteTitle, noteText} = req.body;

  if (req.body) {
    const newNote = {
      noteTitle,
      noteText,
      note_id: uuidv4(),
    };
    readAndAppend(newNote, './db/db.json');
    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = notes;
