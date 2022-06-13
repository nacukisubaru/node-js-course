const PORT = process.env.PORT || 5000;
//const Router = require('./framework/Router');
const Application = require('./framework/Appliction');
const userRouter = require('./routers/user-router');
const jsonParser = require('./framework/parseJson');

//const router = new Router();
const app = new Application();
//middleware функция которая выставит заголовки и вернет ответ
app.use(jsonParser);

//передаем хендлер и путь
//создаем слушатель пути /users где в обработчике возвращается сообщение
// router.get('/users', (req, res) => {
//     res.end('YOU SEND REQUEST TO /USERS');
// });

// router.post('/posts', (req, res) => {
//     res.end('YOU SEND REQUEST TO /POSTS');
// });

app.addRouter(userRouter);

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))