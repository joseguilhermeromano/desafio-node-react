require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('./jwt');
const errorManager = require('./error_manager');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use(jwt());


app.use('/users', require('../controllers/user'));


app.use(errorManager);


const port = 4000;
const server = app.listen(port, function () {
    console.log('Servindo aplicação na porta ' + port);
});