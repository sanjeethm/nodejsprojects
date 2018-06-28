const http = require('http');

const server = http.createServer((req, res) => {
    console.log('in createServer');
    if (req.url === '/ex'){
        console.log('in createServer1');
        res.write('Hello to my first Node app');
        res.end;
    }
    console.log('in createServer 2');
});

server.listen(3000);

console.log('listening on port 3000.....');