const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');

// CRUD - Create, Read, Updade, Delete
//        Post    Get   Put     Delete

app.use(express.urlencoded({extended: true}));
app.use(router);
app.use(express.static(path.resolve(__dirname, 'public')))


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('http://localhost:3000');
});