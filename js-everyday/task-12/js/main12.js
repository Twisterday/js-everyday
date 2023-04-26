// p1
const http = require('http');
const os = require('os');
const path = require('path');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');

	const uptimeInMinutes = Math.floor(os.uptime() / 60);

	const response = `
    <html>
      <head>
        <title>Node.js HTTP Server</title>
      </head>
      <body>
        <p>Current user: ${os.userInfo().username}</p>
        <p>OS type: ${os.type()}</p>
        <p>System uptime: ${uptimeInMinutes} minutes</p>
        <p>Current working directory: ${process.cwd()}</p>
        <p>Server file name: ${path.basename(__filename)}</p>
      </body>
    </html>
  `;

	res.end(response);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

// p2