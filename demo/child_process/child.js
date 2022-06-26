// const fs=require("fs")
// setInterval(()=>{
//     fs.appendFileSync("text.txt","aaa\n")
// },1000)
console.log('child')
process.on('message', (d) => {
  console.log('-------',d)
})
