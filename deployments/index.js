const http = require('http')

let countRequest = 0

const server = http.createServer((req, res) => {
	if (countRequest > 3) {
		res.writeHead(500)
		res.end(`Application V3 crashed\n`)

		return
	}

	countRequest += 1
	res.end(`Hello deployment V3\n`)
})

server.listen(3000, () => {
	console.log('Server listen on PORT 3000')
})
