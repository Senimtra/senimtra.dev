// ### Require express framework ###
const express = require('express');

// ### Require express path module ###
const path = require('path');

// ### Require chalk module ###
const chalk = require('chalk');

// ### Require templating module ###
const hbs = require('hbs');

// ### Require SCSS recompiler ###
const nodeSassMiddleware = require('node-sass-middleware');

// ### Create express app ###
const app = express();

// ### Set up handlebars ###
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// ### Set up SCSS compiler ###
app.use(
   nodeSassMiddleware({
      dest: path.join(__dirname, 'public/styles'),
      src: path.join(__dirname, 'scss'),
      force: true,
      outputStyle: 'extended',
      prefix: '/styles'
   })
);

// ### Serve static files ###
app.use(express.static('public'));

// ### Base GET route ###
app.get('/', (req, res) => {
   res.render('home', { title: 'senimtra.dev' });
});

// ### Start server lh:3000 ###
app.listen(3000, () => {
   console.log(chalk.blue('App is listening @ localhost:3000'));
});
