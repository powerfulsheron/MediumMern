const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js');

router.get('/', postController.find);
router.put ('/', postController.update);
router.delete('/', postController.remove);

module.exports = router;