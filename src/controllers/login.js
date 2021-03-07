const express = require('express');
const router = express.Router();
const userService = require('../services/user');

// routes
router.get('/', login);

module.exports = router;

function login(){

    const success = (res) => { res.redirect('/transactions') }
    const error  = (res) => { res.status(400).json({ message: 'Usuário ou senha inválidos' }) }

    userService.authenticate(req.body)
        .then(user => user ? success : error)
        .catch(err => next(err));
}

