const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const path = require('path');

// GET Route for retrieving all the feedback
router.get('/', (req, res) =>
res.sendFile(path.join(__dirname, "../db/db.json"))
);

// POST Route for a new note
router.post('/', (req, res) => {
  const {noteTitle, noteText} = req.body;

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

module.exports = router;
