const router = require('express').Router();
const UsuarioController = require('../controller/UsuarioController');
const { authenticateToken } = require('../middleware/auth');

router.post('/register', UsuarioController.createUser);
router.get('/:id', authenticateToken, UsuarioController.getById);

module.exports = router;