//dotenv для чтения .env файла получения пременных окружения и их инициализация в env файле 
//либо можно прописать "cross-env PORT=5000 NODE_ENV=prod node ./lessons/proccess.js" в package.json и не использовать dotenv
//либы cross-env, dotenv
const dotenv = require('dotenv');
dotenv.config();

console.log(process.pid);

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);