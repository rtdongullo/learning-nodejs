import{createServer} from 'node:http';


// create HTTP server
const server = createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>we have an HTTP Server</h1>');
})

// Listen for incoming request
server.listen(3000, '127.0.0.1', function() {
    console.log('Server is running');
});

// Normal Function vs Arrow Function
function handleRequest() {}
const handleRequest = () => {}
