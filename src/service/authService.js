const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthService {
    static async login(dadosLogin) {
        const { login, password } = dadosLogin;

        if (!login && !password) throw new Error("O Login e Senha são obrigatórios!");

        const user = await User.findOne({ login: login});

        if (!user) throw new Error("Usuário não encontrado!");

        const checarPassword = await bcrypt.compare(password, user.password);

        if(!checarPassword) throw new Error("Senha inválida!");

        const secret = process.env.SECRET;

        const token = jwt.sign({ 
            id: user._id, login: user.login
        }, secret,
        { expiresIn: "1h" });

        return token;
    }
}

module.exports = AuthService;