const http = require('http');
const os = require('os');
const getGreetingMessage = require('./personalmodule');
const port2 = 5000;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.write('<div style="font-size: 20px;">');
    response.write(`<p>Date of request: ${new Date().toLocaleString()}</p>`);
    response.write(getGreetingMessage(os.userInfo().username));
    response.write('</div>');

    response.end();
}).listen(port2);

console.log(`Server is running on http://localhost:${port2}/`);
