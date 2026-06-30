import { log } from 'console'
import express from 'express'

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send(`<h1>Welcome To Back-End......</h1>`)
})

app.get(`/about`, (req, res) => {
    res.send(`<h1>This is About Page</h1>`)
})

// API 1 -> `page/job`

// API 2 -> `page/contact`

app.listen(port, ()=>{
    console.log(`server is running in port : `, port);
})