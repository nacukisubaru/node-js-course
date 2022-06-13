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
    res.send(users);
});

module.exports = router;