const express = require('express');
const articleRouter = require('./routes/articleRoutes');
const articleCommentRouter = require('./routes/articleCommentRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/articles', articleCommentRouter);

module.exports = app;
