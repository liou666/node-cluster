const {spawn,exec,fork} =require("child_process");
const cpus=require("os").cpus()
const http = require('http');
const net = require('net')


const server = net.createServer()
const workers = {}


const createWorker=(server)=>{
    const worker = fork('worker.js'); 
    workers[worker.pid]=worker;

    console.log(`worker ready ${worker.pid}`);

    worker.send('server', server);
   //监听子进程退出，意外退出后自动生成新的子进程
    worker.on("exit",(code,signal)=>{
        console.log(`worker ${worker.pid} is died`,code,signal);
        Reflect.deleteProperty(workers,worker.pid)
        createWorker(server)
    })
}

server.listen(80)

//收集worker
for (let i = 0, len = 1; i < len; i++) {
    createWorker(server)
}


// process.on('exit', () => {
//     for (const pid in workers) {
//         workers[pid].kill()
//     }
// })

