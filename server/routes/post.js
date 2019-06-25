const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js');

router.get('/', postController.find);
router.post('/', postController.save);
router.put ('/', postController.update);
router.delete('/', postController.remove);

module.exports = router;