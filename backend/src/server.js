const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-kw0h5.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros), buscar algo no servidor, GET
//req.params = Acessar route params (para edição, delete), PUT e DELETE
//req.body = Acessar corpo da requisição (para criação, edição), POST

app.use(express.json());
app.use(routes)

app.listen(3333)