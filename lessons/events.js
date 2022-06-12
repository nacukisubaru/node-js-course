//const dotenv = require('dotenv');
//dotenv.config();

const Emitter = require('events');

const emitter = new Emitter();

const callback =  (data, second, third) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + second);
};

emitter.on('message', callback);
//emitter.onсe('message', callback);

const MESSAGE = process.env.message || '';

if(MESSAGE) {
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 'Вы не указали сообщение');
}

emitter.removeAllListeners();
emitter.removeListener('message', callback);
