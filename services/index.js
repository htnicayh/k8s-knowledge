const redis = require('redis')

const client = redis.createClient({
	url: 'redis://redis:6379',
})

client.on('connect', () => {
	console.log('Connect redis success')
})

client
	.connect()
	.then(() => {
		console.log('Connected to redis')
	})
	.catch((e) => {
		console.log(e)
	})
