const { readArticlesSync, writeArticles } = require('../dev-data/utils');

exports.checkId = (req, res, next) => {
  const articles = readArticlesSync();
  const id = Number(req.params.id);
  const index = articles.findIndex((article) => article.id === id);
  if (index < 0) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid article id',
    });
    return;
  }
  res.locals.index = index;
  next();
};

exports.checkArticle = (req, res, next) => {
  if (!req.body.title) {
    res.status(400).json({
      status: 'fail',
      message: 'Title is required',
    });
    return;
  }
  next();
};

exports.getAllArticles = (req, res) => {
  const articles = readArticlesSync();
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

exports.getArticle = (req, res) => {
  const articles = readArticlesSync();
  res.status(200).json({
    status: 'success',
    data: {
      article: articles[res.locals.index],
    },
  });
};

exports.postArticle = (req, res) => {
  const articles = readArticlesSync();
  const newArticle = {
    id: articles[articles.length - 1].id + 1,
    title: '',
    description: '',
    ...req.body,
  };
  articles.push(newArticle);
  writeArticles(articles, () => {
    res.status(201).json({
      status: 'success',
      data: {
        article: newArticle,
      },
    });
  });
};

exports.patchArticle = (req, res) => {
  const articles = readArticlesSync();
  const updatedArticle = {
    ...articles[res.locals.index],
    ...req.body,
  };
  articles.splice(res.locals.index, 0, updatedArticle);
  writeArticles(articles, () => {
    res.status(200).json({
      status: 'success',
      data: { article: updatedArticle },
    });
  });
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
