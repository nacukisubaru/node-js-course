//Модуль path для работы с путями для файлов
const path = require('path');
//метод для склеивания двух частей пути внезависимости от операционной системы
//так как слеш может менятся взависимости от ос
console.log('склеить участки пути', path.join(__dirname, 'first', 'secound'));

console.log('поднятся на уровень выше в пути', path.join(__dirname, '..', '..'));
console.log('получить абсолютный путь', path.resolve(__dirname,'first', 'second', 'third'));
const fullpath = path.resolve(__dirname,'first', 'second', 'third.jsx');
console.log('Парсинг пути', path.parse(fullpath));
console.log('разделитель в ос', path.sep);
console.log('проверка на абсолютный путь', path.isAbsolute('first/second'));
console.log('название файла', path.basename(fullpath));
console.log('расширение файла', path.extname(fullpath));

// --------------------------------------------------------------

const siteURL = 'http://localhost:8080/users?id=4221';
const url = new URL(siteURL);

console.log(url);
