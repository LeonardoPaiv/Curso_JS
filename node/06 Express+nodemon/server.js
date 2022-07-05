const express = require('express');
const app = express();

// CRUD - Create, Read, Updade, Delete
//        Post    Get   Put     Delete


//  http://site.com/
//  http://site.com/sandalia <- GET -> entrega a pagina /sandalia
//  http://site.com/crocs <- GET -> entrega a pagina /crocs

app.get('/', (requisicao, resposta) => {
    resposta.send('Hello World');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato')
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('http://localhost:3000');
});