const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js');

router.get('/', postController.findByType);
router.get('/all', postController.findAll);
router.post('/', postController.save);
router.post('/like', postController.incrementScore);
router.post('/unlike', postController.decrementScore);
router.put ('/', postController.update);
router.delete('/', postController.remove);

module.exports = router;