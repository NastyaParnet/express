const express = require('express');

const app = express();

app.use(express.json());

// app should use articleCommentRouter and articleRouter routers

module.exports = app;
