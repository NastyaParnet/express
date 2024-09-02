const { readArticlesSync, writeArticles } = require('../dev-data/utils');

exports.checkId = () => {
  // this middleware should check if comment with specified commentId exists
  // if it does - the next middleware should be called
  // if it does not - response status should be set to 404
  // and result should be json:
  // {
  //   status: 'fail'
  //   message: 'Invalid comment id',
  // }
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

exports.getArticleComment = () => {
  // response status should be 200
  // comment of article should be provided
  // result should be json
  // {
  //   status: 'success',
  //   data: {
  //     comment: requested comment,
  //   },
  // }
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

exports.deleteArticleComment = () => {
  // comment with specified commentId should be deleted from the article comments
  // response status should be 200
  // result should be json
  // {
  //   status: 'success',
  //   data: { comment: null }
  // }
};
