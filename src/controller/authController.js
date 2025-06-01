const AuthService = require("../service/authService");

class AuthController {
    async login(req, res) {
        try {
            const token = await AuthService.login(req.body)
            res.status(200).json({
                sucess: "Usuário logado!",
                token: token
            });
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
}

module.exports = new AuthController();