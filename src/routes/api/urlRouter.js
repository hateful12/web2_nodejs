const { Router } = require('express');
const UrlController = require('../../controllers/UrlController');

const urlController = new UrlController();

module.exports = Router()
   .post('/', (req, res) => urlController.create(req, res))
    .post('/:id', (req, res) => urlController.updateById(req, res))
    .get('/d/:id', (req, res) => urlController.deleteById(req, res))
    .get('/:id', (req, res) => urlController.getById(req, res))
