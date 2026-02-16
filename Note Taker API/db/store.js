/**This is a built-in Node.js module that lets us read and write files — which is how we'll save notes to db.json. */
const fs = require('fs');
const path = require('path');

// Read all notes from db.json
const getNotes = () => {
    const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
    return JSON.parse(data);
};

// Save all notes to db.json
const saveNotes = (notes) => {
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes, null, 2));
};

// Export the functions so server.js can use them
module.exports = { getNotes, saveNotes };