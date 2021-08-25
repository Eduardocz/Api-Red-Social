const express = require('express');
const response = require('../../network/response');
const Controller = require('./index')
const router = express.Router();

//ROUTES

router.post('/login', login);


//FUNCTIONS
function login(req, res) {
    const { username, password } = req.body;
    Controller.login(username, password)
        .then((ok) => {
            response.success(req, res, ok, 200);
        }).catch((err) => {
            response.error(req, res, "Información invalida", 400);
        });
}

module.exports = router;