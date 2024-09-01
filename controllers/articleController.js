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

exports.checkArticle = (req, res, next) => {
  if (req.body.title) {
    next();
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'Title is required',
    });
  }
};

exports.getAllArticles = (req, res) => {
  const { title } = req.query;
  const allArticles = title
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(title.toLowerCase())
      )
    : articles;
  res.status(200).json({
    status: 'success',
    data: {
      count: allArticles.length,
      articles: allArticles,
    },
  });
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

exports.postArticle = (req, res) => {
  const copyArticles = [...articles];
  const newArticle = {
    id: copyArticles[copyArticles.length - 1].id + 1,
    title: '',
    description: '',
    comments: '',
    ...req.body,
  };
  copyArticles.push(newArticle);
  writeArticles(copyArticles, () => {
    res.status(201).json({
      status: 'success',
      data: {
        article: newArticle,
      },
    });
  });
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
