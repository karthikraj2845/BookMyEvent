const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP } = require('../controllers/authController');
router.post('/register', (req, res) => {
    // Registration logic here
    res.send('User registered successfully');
});
router.post('/register', registerUser);
router.post('/login',loginUser);
// router.post('/logout', logoutUser);
router.post('/verify-otp', verifyOTP);



module.exports = router;