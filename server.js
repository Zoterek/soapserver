const express = require('express')
const fs = require('fs')
const soap = require('soap')

var app = express()
var wsdl = fs.readFileSync('public/custom.wsdl', 'utf8')
var serviceObject = {
		service: {
			port: {
				do: other
			}
		}
}
var port = 8001

app.get('/', function(req, res) {
	res.send('Soap server 1.0.0')
})
app.use(express.static('public'))

app.listen(port, function() {
	console.log('Listening on port', port)
	soap.listen(app, '/custom', serviceObject, wsdl)
})

function other(args) {
	return {
		output: "Hi " + args.input
	}
}