const UsuarioService = require('../service/UsuarioService');

exports.createUser = async (req, res) => {
    try {
        const user = await UsuarioService.createUser(req.body);;

        res.status(201).json({user});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}