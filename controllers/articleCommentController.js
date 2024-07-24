const { readArticlesSync, writeArticles } = require('../dev-data/utils');

// Use readArticlesSync function to get articles
// Copy it to the functions below where articles are needed and remove from here
const articles = readArticlesSync();

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

exports.checkArticleComment = () => {
  // this middleware should check if comment in request body is correct
  // if it is - the next middleware should be called
  // if it is not - response status should be set to 400
  // and result should be json:
  // {
  //   status: 'fail'
  //   message: 'Content is required',
  // }
};

exports.getAllArticleComments = () => {
  // response status should be 200
  // all comments of article with specified id should be provided
  // result should be json
  // {
  //   status: 'success',
  //   data: {
  //     count: comments count,
  //     comments: comments,
  //   },
  // }
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

exports.postArticleComment = () => {
  // new comment should be added to the article
  // id should be evaluated as id of last comment of this article + 1
  // response status should be 201
  // result should be json
  // {
  //   status: 'success',
  //   data: { comment: newComment }
  // }
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
