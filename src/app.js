require('dotenv').config();
const connectDB = require('./config/database');
const express = require('express');
const app = express();

const UsuarioRouter = require('./routes/UsuarioRouter');

connectDB();

app.use(express.json());
app.use('/auth/register', UsuarioRouter);

app.get('/', (req, res) => {
    res.status(200).json({Sucess: "Olá Mundo"});
})

app.listen(3000, () => {
    console.log('Servidor Rodando em http://127.0.0.1:3000');
})