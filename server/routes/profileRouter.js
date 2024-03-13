const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.use('/getUserData/:id', profileController.get_user_data);

module.exports = router;