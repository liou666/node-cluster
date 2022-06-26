const {spawn,exec,fork} =require("child_process");
const cpus=require("os").cpus()
const http = require('http');
const net = require('net')


const server = net.createServer()
const workers = []


//收集worker
for (let i = 0, len = 1; i < len; i++) {
  workers.push(fork('worker.js'))
}
server.on('connection', (s) => {
  s.end('parent：'+process.pid)
})

server.listen(80, () => {
  workers.forEach(worker => {
    worker.send('server', server)
    server.close()
  })
})


