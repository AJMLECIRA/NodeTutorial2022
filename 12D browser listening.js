const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(82, () => {
    console.log('server listneing on part : 82...')
})