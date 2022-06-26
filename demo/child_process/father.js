const {spawn,fork} =require('child_process')
// //child.js
// console.log("child")



//father.js 
// const cp = spawn("node", ["child.js"], {
//   stdio:[0,1,2,'ipc']
// });

const cp = fork('child', {
  cwd:process.cwd()
})
cp.send('hi')

// cp.stdout.pipe(process.stdout)
