const http = require("http");
const {spawn,fork}=require('child_process')

http.createServer((req,res)=>{  
    if(req.url==="/sum"){
      const cp = fork('longComputation')
      cp.send("hi")
      cp.on('message', (sum) => {
         res.end(sum+'')
      })       
    } else {
    res.end("succeed")
      
    }
}).listen(3000)
