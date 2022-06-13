
const http = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        //массив из функций middleware
        this.middlewares = [];
    }
    
    use(middleware) {
        console.log( this.middlewares);
        this.middlewares.push(middleware);
    }

    //слушатель сервера
    listen(port, callback) {
        this.server.listen(port, callback);
    }
    
    _createServer() {
        return http.createServer((req, res) => {
            //создаем событие и передаем маску в маске url и method получаем из заголовков
            //также передаем req res
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
            //проверка существует ли запрос/ существует ли событие
            if(!emitted) {
                //закрытие стрима
                res.end();
            }
        });
    }

    // endpoint = {
    //     '/users': {
    //         'GET': handler
    //     }
    // }
    //по структуре ключ путь значение объект где ключ метод значение функция
    //перебираем ендпоинты и методы каждого ендпоинта и на них ставим слушатель
    //чтобы когда мы обратились по ссылке слушатель отработал по этой ссылке и методу из заголовков
    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    console.log(this.middlewares);
                    //вызов middleware
                    //внутри middleware res мутирует ему добавлятся метод send
                    //в котором указываются заголовки и возвращается ответ функцией end
                    this.middlewares.forEach(middleware => middleware(req, res));
                    //в handler передается мутировавший res от которого вызовется send в user-router
                    handler(req, res);
                });
            })
        })
    }

    //шаблон пути
    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`;
    }
}