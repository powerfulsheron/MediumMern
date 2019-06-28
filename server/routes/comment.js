const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.js');

router.post ('/', commentController.save);
router.put ('/', commentController.update);
router.delete('/', commentController.remove);

module.exports = router;