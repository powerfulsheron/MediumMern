const express = require('express');
const router = express.Router();
const typeController = require('../controllers/type.js');

router.get('/', typeController.find);

module.exports = router;