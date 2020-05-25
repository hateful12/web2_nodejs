const { Router } = require('express');
const urlRouter = require('./urlRouter');

module.exports = Router()
    .get('/', )
    .use('/url', urlRouter);
