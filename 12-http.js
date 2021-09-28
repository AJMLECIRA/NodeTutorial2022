const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{"content-Type":"text/html"})
    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()
    }
    if (req.url === '/about') {
        res.write('Welcome to our Newest page')
        res.end()
    }
    res.write(`<h2>Ooops</h2><a href='/'>back home</a>`)
    res.end()
})

server.listen(82)