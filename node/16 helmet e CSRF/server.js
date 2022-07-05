require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashMenssage = require('connect-flash');
    
const router = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middleGlobal, checkErrorCsft, csrfMiddleware } = require('./src/middleware/middleware');

// CRUD - Create, Read, Updade, Delete
//        Post    Get   Put     Delete

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOpitions = session({
    secret: 'iuahdsigdhasdasndkjhyu&#&@*lsjdlaksjd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOpitions);
app.use(flashMenssage());


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// nosso midwares
app.use(middleGlobal);
app.use(checkErrorCsft);
app.use(csrfMiddleware);
app.use(router);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
        console.log('http://localhost:3000');
    });
});

