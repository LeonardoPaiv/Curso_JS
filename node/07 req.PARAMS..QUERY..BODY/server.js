const express = require('express');
const app = express();

// CRUD - Create, Read, Updade, Delete
//        Post    Get   Put     Delete

app.use(express.urlencoded({extended: true}));


app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST"> 
    Nome do cliente: <input type="text" name="nome">
    <button>Olá Mundo</button>
    `);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato')
});

app.get('/teste/:parametro?/:outro_parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Foi enviado isso: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('http://localhost:3000');
});