const http = require('http');
const longComputation=require('../longComputation')
const {fork}=require('child_process')
const childServer = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    if (req.url === '/sum') {
      const cp = fork('../longComputation')
      cp.send("hi")
      cp.on('message', (sum) => {
         res.end(sum+'')
       })
    } else {
      res.end("child worker run"+', at pid: ' + process.pid);
    }
});

process.on('message', (type, server) => {
     if (type==='server') {
      
         childServer.listen(server)//监听master进程中的服务
     }
})
