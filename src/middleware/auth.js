require('dotenv').config();
const jwt = require('jsonwebtoken');
const AuthController = require('../controller/AuthController');

class Auth {
    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return res.status(404).json({message: "Acesso negado"});
        }

        try {
            const secret = process.env.SECRET;

            jwt.verify(token, secret, (err, usuario) => {
                if (err) {
                    res.status(403).json({message: "Token inválido"})
                }
                req.usuario = usuario;
                next();
            });

        } catch (err) {
            res.status(400).json({message: err});
        }
    }
}

module.exports = new Auth();