const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/', userController.find);
router.put ('/', userController.update);
router.delete('/', userController.remove);

module.exports = router;