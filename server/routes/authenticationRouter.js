const express = require('express');
const router = express.Router();
const authenticationRouter = require('../controllers/authenticationController');

router.post('/register',authenticationRouter.register_post);

router.post('/login', authenticationRouter.login_post);

module.exports = router;