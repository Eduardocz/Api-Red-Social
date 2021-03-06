const express = require('express');
const secure = require('./secure')
const response = require('../../network/response');
const Controller = require('./index')
const router = express.Router();

//ROUTES
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/',secure('update'), upsert);

//FUNCTIONS
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function get(req, res) {
    const id = req.params.id
    Controller.get(id)
        .then((user) => {
            response.success(req, res, user, 200);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function upsert(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

module.exports = router;