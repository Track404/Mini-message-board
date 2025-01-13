const express = require('express');
require('dotenv').config();

const app = express();
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRoute');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', messageRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
