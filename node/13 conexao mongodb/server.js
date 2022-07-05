require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));
    
const router = require('./routes');
const path = require('path');
const { middleGlobal } = require('./src/middleware/middleware');

// CRUD - Create, Read, Updade, Delete
//        Post    Get   Put     Delete

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(middleGlobal);

app.use(router);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
        console.log('http://localhost:3000');
    });
});

