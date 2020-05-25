const { join } = require('path');
const express = require('express');
const {
    json,
    urlencoded
} = require('body-parser');


const port = 3000;

const app = express();

app.use(require('cors')());
app.use(json());
app.use(urlencoded({
    extended: true
}));

app.use('/', express.static(join(__dirname, 'public')));
app.use(require('./routes'));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => console.log('Server Listening on port : ', port));

process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
        process.exit(1);
    })
    .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    })
    .on('SIGINT', () => {
        console.log('\nCtrl+C Server Stooped')
        process.exit(0)
    });
