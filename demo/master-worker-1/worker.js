const http = require('http');

const childServer = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("child worker run"+', at pid: ' + process.pid);
});

process.on('message', (type, tcp) => {
     if (type==='server') {
       tcp.on('connection', (s) => {
          childServer.emit('connection',s)
        })
     }
})
