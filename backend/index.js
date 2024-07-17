const express = require('express')
const app = express()
const notes = require('./data/notes')

app.get('/', (req, res)=>{
	res.send("Hello");
})

app.get('/api/notes', (req, res)=> {
	res.json(notes)
})

app.get('/api/notes/:id', (req, res)=> {
	const note = notes.find((n) => n._id == req.params.id)
	
	console.log(req.params)
	res.sen(dnote);
})

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))
