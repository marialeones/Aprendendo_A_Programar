const http = require('http');

http.createServer((req, res) => {
    res.end('<h1>Olá Mundo! </h1>')
}).listen(2300, () => console.log('Servidor está rodando..'));