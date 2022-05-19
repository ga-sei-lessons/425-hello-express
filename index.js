// import the required packages
const express = require('express')

// configure the express app
const app = express()
const PORT = 3000

// define http routes that serve data
// app.httpVerb('/url', callback (req, res) => {})
app.get('/', (req, res) => {
	// send a plain text response
	res.send('<h1>Hello, Express!</h1>')
})

// listen on a port -- always last
app.listen(PORT, () => {
	// verify that things are working when the server starts
	console.log(`You are listening to the smooth sounds of port ${PORT} in the morning 🌊`)
})