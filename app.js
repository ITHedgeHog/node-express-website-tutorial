const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

const port = process.env.PORT || 3001;

app.server = app.listen(port, () => {
  debug(`Listening on PORT ${chalk.green(port)}`);
});