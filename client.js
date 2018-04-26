const fs = require('fs')
const soap = require('soap')

var url = 'http://localhost:8001/custom?wsdl'
var options = {
	disableCache: true
}

soap.createClient(url, options, function(err, client) {
	if(err) {
		throw err
	}

	var args = {
		input: "Odin"
	}

	client.do(args, function(err, res) {
		if(err) {
			throw err
		}

		console.log(res.output)
	})
})
