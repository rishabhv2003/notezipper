const express = require('express');
const app = express();
const notes = require('./data/notes');

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find(n => n._id == req.params.id);
    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}/`));
