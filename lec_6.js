const cluster = require('cluster');
const http = require('express');
const numCPUs = require('node:os').cpus().length;
console.log(`Primary ${process.pid} is running`);
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  // Fork cores.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else {
let express = require('express');
let app = express();

app.get('/', (req, res) =>{
    console.log('hello world')
})
app.get('/helloall', (req, res) =>{
    console.log('hello all api')
})

app.listen(4000)
}