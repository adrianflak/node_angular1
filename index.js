import { createServer } from 'http';
let x = 'Ala ma kota ale z Node.js'
createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(x)
    console.log(x)
    
}).listen(8080);