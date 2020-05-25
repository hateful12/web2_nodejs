const apiRouter = require('./api');
const { Router } = require('express');
const rootRouter = require('./rootRouter');


module.exports = Router()
    .use('/', rootRouter)
    .use('/api', apiRouter)
    .use((req, res) => res.status(404).json({ message: 'Not Found: '.concat(req.url)}));
