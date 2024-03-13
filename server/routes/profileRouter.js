const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/getUserData/:id', profileController.get_user_data);

router.post('/postUserTodo', profileController.post_user_todo);

module.exports = router;