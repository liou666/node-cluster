const {fork}=require('child_process')
const cpus = require('os').cpus()

for (let index = 0; index < cpus.length; index++) {
  fork('3')
}
