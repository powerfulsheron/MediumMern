const express = require('express');
const router = express.Router();
const securityController = require('../controllers/security.js');

router.post('/login', securityController.login);
router.post('/register', securityController.register);

module.exports = router;