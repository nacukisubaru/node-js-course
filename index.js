const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
        //'Content-type': 'application/json'
    })
 
    if(req.url === '/users') {
        return res.end(JSON.stringify([
            {id: 1, name:'test'}
        ]));
    } else if(req.url === '/posts') {
       return res.end('POSTS');
    } else {
       return res.end('<h1>Сервер работает</h1>');
    }
});

server.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));