const { readArticlesSync, writeArticles } = require('../dev-data/utils');

// Use readArticlesSync function to get articles
// Copy it to the functions below where articles are needed and remove from here
const articles = readArticlesSync();

exports.checkId = () => {
  // this middleware should check if article with specified commentId exists
  // if it does - the next middleware should be called
  // if it does not - response status should be set to 404
  // and result should be json:
  // {
  //   status: 'fail',
  //   message: 'Invalid article id',
  // }
};

exports.checkArticle = () => {
  // this middleware should check if article in request body is correct
  // if it is - the next middleware should be called
  // if it is not - response status should be set to 400
  // and result should be json:
  // {
  //   status: 'fail'
  //   message: 'Title is required',
  // }
};

exports.getAllArticles = () => {
  // response status should be 200
  // all articles should be provided
  // if title is present in query params,
  // only those articles that contain it (case insensitive), should be provided
  // result should be json
  // {
  //   status: 'success',
  //   data: {
  //     count: articles count,
  //     articles: all articles,
  //   },
  // }
};

exports.getArticle = () => {
  // response status should be 200
  // article with requested id should be provided
  // result should be json
  // {
  //   status: 'success',
  //   data: {
  //     article: found article,
  //   },
  // }
};

exports.postArticle = () => {
  // new article should be added
  // id should be evaluated as id of last articlee + 1
  // response status should be 201
  // result should be json
  // {
  //   status: 'success',
  //   data: { article: newarticle }
  // }
};

exports.patchArticle = () => {
  // article with specified id should be updated
  // (only properties provided in body should be overwritten in existing article)
  // response status should be 200
  // result should be json
  // {
  //   status: 'success',
  //   data: { article: updated article }
  // }
};

exports.deleteArticle = () => {
  // article with specified id should be deleted
  // response status should be 200
  // result should be json
  // {
  //   status: 'success',
  //   data: { article: null }
  // }
};
