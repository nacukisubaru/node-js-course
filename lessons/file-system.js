const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
//рекурсивное синхронное создание папок(блокирует главный поток)
//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive:true});

//ассинхронный вариант создания папок с обработкой ошибок
// fs.mkdir(path.resolve(__dirname, 'dir'), (err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка создана');
// });

//удлаение папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw err;
//     }
// })

//запись файла
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwrfsdfdsds', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('файл записан');
// });

//запись в конец файла
// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'добавили в конец', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('файл записан');
// })

//запись в файл на промисах
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message);
        }
        resolve();
    }))
}


const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message);
        }
        resolve();
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message);
        }
        resolve(data);
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err, data) => {
        if(err) {
            return reject(err.message);
        }
        resolve(data);
    }))
}

removeFileAsync(path.resolve(__dirname, 'test.txt'))
    .then(() => console.log('file was removed'))

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'fdsfsdfds')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '6556'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '6556'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '6556'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '6556'))
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => console.log(data))
    .catch(err => console.log(err))
