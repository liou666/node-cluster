function longComputation(){
  console.time('计算耗时');
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  };
  console.timeEnd('计算耗时');
  return sum; 
}

// process.on('message', msg => {
//   console.log(msg, 'process.pid', process.pid); // 子进程id
//   const sum = longComputation();
//   process.send(sum);
// })

module.exports=longComputation
