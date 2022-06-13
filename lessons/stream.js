const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('end', () => console.log('Закончили читать'));
stream.on('open', () => console.log('Начали читать'));