const http = require('http');

const server = http.createServer((request, response) => {
	// console.log('headers', request.headers)
	console.log('method', request.method)	
	console.log('url', request.url)
	const user = {
		name: 'john',
		hobby: 'Skating'
	}

	response.setHeader('constent-Tye', 'application/json');
	response.end(JSON.stringify(user));
})

server.listen(3000);