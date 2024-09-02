const { readArticlesSync, writeArticles } = require('../dev-data/utils');

exports.checkId = (req, res, next) => {
  const articles = readArticlesSync();
  const { comments } = articles[res.locals.index];
  const id = Number(req.params.commentId);
  const commentIndex = comments.findIndex((article) => article.id === id);
  if (commentIndex < 0) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid comment id',
    });
    return;
  }
  res.locals.commentIndex = commentIndex;
  next();
};

exports.checkArticleComment = (req, res, next) => {
  if (!req.body.content) {
    res.status(400).json({
      status: 'fail',
      message: 'Content is required',
    });
    return;
  }
  next();
};

exports.getAllArticleComments = (req, res) => {
  const articles = readArticlesSync();
  const { comments } = articles[res.locals.index];
  res.status(200).json({
    status: 'success',
    data: {
      count: comments.length,
      comments: comments,
    },
  });
};

exports.getArticleComment = (req, res) => {
  const articles = readArticlesSync();
  const { comments } = articles[res.locals.index];
  res.status(200).json({
    status: 'success',
    data: {
      comment: comments[res.locals.commentIndex],
    },
  });
};

exports.postArticleComment = (req, res) => {
  const articles = readArticlesSync();
  const { comments } = articles[res.locals.index];
  const newComment = {
    id: (comments[comments.length - 1]?.id || 0) + 1,
    ...req.body,
  };
  comments.push(newComment);
  articles.splice(res.locals.index, 0, {
    ...articles[res.locals.index],
    comments,
  });
  writeArticles(articles, () => {
    res.status(201).json({
      status: 'success',
      data: {
        comment: newComment,
      },
    });
  });
};

exports.deleteArticleComment = (req, res) => {
  const articles = readArticlesSync();
  const { comments } = articles[res.locals.index];
  comments.splice(res.locals.commentIndex, 1);
  articles.splice(res.locals.index, 0, {
    ...articles[res.locals.index],
    comments,
  });
  writeArticles(articles, () => {
    res.status(200).json({
      status: 'success',
      data: { comment: null },
    });
  });
};
