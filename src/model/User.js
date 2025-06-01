const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    role: { type: String, require: true},
});

const Usuario = new mongoose.model("Usuario", UserSchema);

module.exports = Usuario;