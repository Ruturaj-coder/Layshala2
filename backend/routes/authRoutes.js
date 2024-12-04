const express = require('express');
const { loginUser, getUserData } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginUser);
router.get('/user-data', getUserData);

module.exports = router;
