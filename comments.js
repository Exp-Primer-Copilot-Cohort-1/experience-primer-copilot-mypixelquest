// create web server
const express = require('express');
const app = express();

// import commentsRouter
const commentsRouter = require('./comments');

// use commentsRouter
app.use('/comments', commentsRouter);

// start server on port 3000
app.listen(3000);