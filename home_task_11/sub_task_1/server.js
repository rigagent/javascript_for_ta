const http = require('http');

const port = 5500;

const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');

    if (request.url === '/vote' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(`Your vote is accepted: ${new Date().toLocaleString()}`);
    } else {
        response.writeHead(404);
        response.end('Page not found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
