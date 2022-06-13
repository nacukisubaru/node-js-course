const Router = require('../framework/Router');
const router = new Router();

const users = [
    {id: 1, name: 'alex'},
    {id: 2, name: 'vasya'},
];

router.get('/users', (req, res) => {
    res.end(JSON.stringify(users));
});

router.post('/posts', (req, res) => {
    res.end(JSON.stringify(users));
});

module.exports = router;