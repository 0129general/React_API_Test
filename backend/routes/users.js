const router = require('express').Router();
const users = require('../controllers/users');

router.get('/', (req, res) => {
  users.getAllUsers(req, res);
});

router.post('/', (req, res) => {
  users.createUser(req, res);
});

router.get('/:id', (req, res) => {
  users.getUserById(req, res);
});

router.patch('/me', (req, res) => {
  users.updateUser(req, res);
});

router.patch('/me/avatar', (req, res) => {
  users.updateAvatar(req, res);
});

module.exports = router;
