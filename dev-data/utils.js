const fs = require('fs');

const articlesFilePath = `${__dirname}/articles-simple.json`;

exports.readArticlesSync = () => JSON.parse(fs.readFileSync(articlesFilePath));

exports.writeArticles = (articles, callback) => {
  fs.writeFile(articlesFilePath, JSON.stringify(articles), callback);
};
