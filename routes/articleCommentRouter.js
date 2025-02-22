const express = require('express');
const {
  checkId: checkCommentId,
  checkArticleComment,
  getAllArticleComments,
  getArticleComment,
  postArticleComment,
  deleteArticleComment,
} = require('../controllers/articleCommentController');
const { checkId } = require('../controllers/articleController');

const router = express.Router();

router.param('id', checkId);
router.param('commentId', checkCommentId);

router
  .route('/:id/comments')
  .get(getAllArticleComments)
  .post(checkArticleComment)
  .post(postArticleComment);
router
  .route('/:id/comments/:commentId')
  .get(getArticleComment)
  .delete(deleteArticleComment);

module.exports = router;
