// create web server
const express = require('express');
const app = express();

// import commentsRouter
const commentsRouter = require('./comments');

// use commentsRouter
app.use('/comments', commentsRouter);

// start server update
app.listen(3000);