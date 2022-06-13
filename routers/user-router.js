const Router = require('../framework/Router');
const router = new Router();

const users = [
    {id: 1, name: 'alex'},
    {id: 2, name: 'vasya'},
];

router.get('/users', (req, res) => {
    res.send(users);
});

router.post('/posts', (req, res) => {
    console.log(req.body);
    //получаем тело запроса
    const user = req.body;
    //добавляем пользователя
    users.push(user);
    res.send(user);
});

module.exports = router;