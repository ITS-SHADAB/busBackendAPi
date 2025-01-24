const express = require('express');
const { createUser, loginUser } = require('../controller/user');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello user');
});
router.post('/', createUser);
router.post('/login', loginUser);

module.exports = router;
