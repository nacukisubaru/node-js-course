const Router = require('../framework/Router');
const router = new Router();

const users = [
    {id: 1, name: 'alex'},
    {id: 2, name: 'vasya'},
];

router.get('/users', (req, res) => {
    if(req.params.id) {
        return res.send(users.find(user=> user.id == req.params.id));
    }
    res.send(users);
});

router.get('/users?id=1', (req, res) => {
    if(req.params.id) {
        return res.send(users.find(user=> user.id == req.params.id));
    }
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