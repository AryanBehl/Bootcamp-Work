// const http = require('http')
import http from 'http'

const port = 3000
    
const server = http.createServer((req,res) => {

})

server.listen(port , ()=>{
    console.log("Server is listen in port:", port);
})