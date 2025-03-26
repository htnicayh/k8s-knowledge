const http = require('http')

const { PORT } = process.env

const server = http.createServer((req, res) => {
	console.log('Request received')
})

server.listen(PORT, () => {
	console.log('Server running on port ', PORT)
})
