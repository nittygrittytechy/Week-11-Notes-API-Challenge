/** 1. require('express') — loads the Express library so we can build a web server
2. require('path') — a built-in Node.js tool that helps us work with file paths correctly
3. const app = express() — creates our actual server application
4. PORT — tells the server which port to listen on. It checks for a Render/deployment port first (process.env.PORT), and falls back to 3001 for local development
5. require('./db/store') — imports the getNotes and saveNotes helper functions from store.js */
const express = require('express');
const path = require('path');
const { getNotes, saveNotes } = require('./db/store');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to handle incoming data
/** express.json() — lets the server understand JSON data sent from the front-end (like when a user saves a note)
express.urlencoded() — lets the server understand form data
express.static('public') — tells Express to serve all the files in the public folder (your HTML, CSS, JS) automatically without needing individual routes for each one */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API routes
app.get('/api/notes', (req, res) => {
    res.json(getNotes());
});

// POST /api/notes - saves a new note
/**Here's what's happening step by step:
1. We get the current notes from db.json using our getNotes helper
2. We create a new note using the title and text the user typed, plus a unique ID using Date.now()
3. We push the new note into the array
4. We save the updated array back to db.json using our saveNotes helper
5. We respond with the new note so the front-end knows it worked */
app.post('/api/notes', (req, res) => {
    const notes = getNotes();
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Date.now().toString()
    };
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);
});

// DELETE /api/notes/:id - deletes a note by id (BONUS)
/** 1. We get the current notes from db.json using our getNotes helper
2. We filter out the note with the matching id
3. We save the filtered array back to db.json using our saveNotes helper
4. We send back the updated notes */
app.delete('/api/notes/:id', (req, res) => {
    const notes = getNotes();
    const filteredNotes = notes.filter(note => note.id !== req.params.id);
    saveNotes(filteredNotes);
    res.json(filteredNotes);
});

// Fallback route - must be last so it doesn't override the other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});