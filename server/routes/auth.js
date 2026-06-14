const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP } = require('../controllers/authController');
router.post('/register', registerUser);
router.post('/login',loginUser);
// router.post('/logout', logoutUser);
router.post('/verify-otp', verifyOTP);



module.exports = router;