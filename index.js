const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();
class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже существует`)
        }

        endpoint[method] = handler;
        //слушатель события с маской path и method
        //req и res аргументы в колбэке работают потому создали событие при помощи emit в котором эти аргументы передали
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res);
        });
    }

    //обертки для запроса
    get(path, handler) {
        this.request('GET', path, handler);
    }

    post(path, handler) {
        this.request('POST', path, handler);
    }

    put(path, handler) {
        this.request('PUT', path, handler);
    }

    delete(path, handler) {
        this.request('DELETE', path, handler);
    }
}

const router = new Router();
//передаем хендлер и путь
router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS');
});

router.post('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS');
});


const server = http.createServer((req, res) => {
    //создаем событие и передаем маску в маске url и method получаем из заголовков
    //также передаем req res
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
    //проверка существует ли запрос/ существует ли событие
    if(!emitted) {
        //закрытие стрима
        res.end();
    }
});

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html; charset=utf-8'
//         //'Content-type': 'application/json'
//     })
 
//     if(req.url === '/users') {
//         return res.end(JSON.stringify([
//             {id: 1, name:'test'}
//         ]));
//     } else if(req.url === '/posts') {
//        return res.end('POSTS');
//     } else {
//        return res.end('<h1>Сервер работает</h1>');
//     }
// });

server.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));