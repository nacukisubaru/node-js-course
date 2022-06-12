const fs = require('fs');
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
