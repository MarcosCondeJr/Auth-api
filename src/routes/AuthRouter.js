const router = require('express').Router();
const AuthController = require('../controller/authController');

router.post('/', AuthController.login);

module.exports = router;