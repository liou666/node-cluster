const {spawn} =require('child_process')
//child.js
console.log("child")

//father.js
spawn("node",["child"]);
