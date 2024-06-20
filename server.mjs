import { unlink, writeFile } from 'node:fs';
import { createServer } from 'node:http';


// create HTTP server
const server = createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.end('<h1>we have an HTTP Server</h1>');
})

// Listen for incoming request
server.listen(3000, '127.0.0.1', function () {
    console.log(req.url);
    if (req.url.includes('create')) {
        // Create a file
        // Return repsonse
        res.writeHead(200, { 'Content-Type': 'text:html' });
        res.end('<h1>File added</h1>');
    }
    console.log('Server is running');
}); {
} else {
    // Delete file
    unlink('./index.html', () => {
        // Return response
        res.writeHead(200, { 'Content-Type': 'text:html' });
        res.end('<h1>File deleted</h1>');
    });
}

Arrow Function
const handleRequest = () => { }
