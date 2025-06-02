const UsuarioService = require('../service/UsuarioService');

class UserController {
    async createUser(req, res) {
        try {
            const user = await UsuarioService.createUser(req.body);;

            res.status(201).json({user});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    }

    async getById(req, res) {
        try {
            const user = await UsuarioService.getById(req.params.id);

            res.status(200).json({user});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    }
}

module.exports = new UserController();

