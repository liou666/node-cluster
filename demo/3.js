const http = require('http')

http.createServer((req, res) => {
 res.end('hello world\n') 
}).listen(parseInt(Math.random() * 10000))
