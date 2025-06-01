const router = require('express').Router();
const UsuarioController = require('../controller/usuarioController');

router.post('/', UsuarioController.createUser);

module.exports = router;