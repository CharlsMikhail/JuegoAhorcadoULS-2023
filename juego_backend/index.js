const fs = require('fs')
const path = require('path')
const express = require('express')
var cors = require('cors');
const app = express()
app.use(express.static('pub'))

app.use(cors());

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
});

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/jugar', (request, response) => {
	fs.readFile(path.resolve(__dirname, 'preguntas/programacion.txt'), 'utf8',
		(err, data) => {
			if (err) {
				console.error(err)
				response.status(500).json({
					error: 'message'
				})
				return
			}
			response.json({
				preguntas: data.replace(/\n/g, '<br>')
			})
		})
	//
})