const http = require('http');
const os = require('os');
const path = require('path');
const port1 = 5000;

http.createServer((request, response) => {
    response.writeHead(200, "Content-Type: text/plain");

    const userInfo = os.userInfo();
    const osType = os.type();
    const uptimeMinutes = Math.floor(os.uptime() / 60);
    const currentDir = path.resolve('.');
    const fileName = path.basename(__filename);

    response.write('<div style="font-size: 20px;">');
    response.write('<h2>System Information</h2>');
    response.write(`<p>Current user name: ${userInfo.username}</p>`);
    response.write(`<p>OS type: ${osType}</p>`);
    response.write(`<p>System work time: ${uptimeMinutes} minutes</p>`);
    response.write(`<p>Current work directory: ${currentDir}</p>`);
    response.write(`<p>Server file name: ${fileName}</p>`);
    response.write('</div>');

    response.end();
}).listen(port1);

console.log(`Server is running on http://localhost:${port1}/`);
