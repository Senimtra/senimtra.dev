// ### Require express framework ###
const express = require('express');

// ### Require chalk module ###
const chalk = require('chalk');

// ### Create express app ###
const app = express();

// ### Start server lh:3000 ###
app.listen(3000, () => {
   console.log(chalk.yellow('App is listening @ localhost:3000'));
});
