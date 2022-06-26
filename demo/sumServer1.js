const http = require("http");

http.createServer((req,res)=>{  
    if(req.url==="/sum"){
      const sum = longComputation()
      res.end(sum+'')
    } else {
      res.end("succeed")
    }
}).listen(3000)
