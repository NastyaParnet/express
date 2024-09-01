const express = require('express');
const {
  checkId,
  checkArticle,
  getAllArticles,
  postArticle,
  getArticle,
  patchArticle,
  deleteArticle,
} = require('../controllers/articleController');

const router = express.Router();

router.param('id', checkId);

router.route('/').get(getAllArticles).post(checkArticle).post(postArticle);
router.route('/:id').get(getArticle).put(patchArticle).delete(deleteArticle);

module.exports = router;
