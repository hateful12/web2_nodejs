const { Router } = require('express');
const RootController = require('../controllers/RootController');


const rootController = new RootController();


module.exports = Router()
    .get('/', (req, res) => rootController.getAll(req, res))
    .get('/new', (req, res) => rootController.createNew(req, res))
    .get('/edit/:id', (req, res) => rootController.edit(req, res));