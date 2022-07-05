const express = require('express');
const app = express();
const router = require('./routes')

// CRUD - Create, Read, Updade, Delete
//        Post    Get   Put     Delete

app.use(express.urlencoded({extended: true}));
app.use(router)



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('http://localhost:3000');
});