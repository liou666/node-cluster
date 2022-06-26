const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isPrimary) {
  console.log(`主进程 ${process.pid} 正在运行`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
    //监听子进程的退出，意外推出后自动生成新的子进程
  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
    // cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(process.pid+'\n');
  }).listen(8000);
  console.log(`工作进程 ${process.pid} 已启动`);
}
