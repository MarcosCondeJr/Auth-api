const User = require('../model/user');
const bcrypt = require('bcrypt');
const nodeCrypto = require('node:crypto');

class UsuarioService {
    static async createUser(dadosUser) {
        const { login, password, role} = dadosUser;

        if (!login, !password, !role) {
            throw new Error("Os dados não foram preenchidos corretamente!")
        }

        const loginExiste = await User.find({login: login});

        console.log(loginExiste);

        if (loginExiste.length == 1) {
            throw new Error("Já Existe um usuário com esse login");
        }
        
        const ramdomSalt = nodeCrypto.randomInt(10, 16);
        const senhaHash = await bcrypt.hash(password, ramdomSalt);

        const user = new User({ login, password: senhaHash, role});
        return await user.save();
    }
}

module.exports = UsuarioService;