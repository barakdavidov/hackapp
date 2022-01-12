const express = require('express');
const router = express.Router();

const auth = require('../middleware/authentication');
const adminAuth = require('../middleware/adminAuthentication');

router.route('/:id').get((req, res) => {
    const { id } = req.params;
    console.log(`Get user with id: ${id}`);
});
router.route('/editprofile/:id').put(auth, (req, res) => {
    const { id } = req.params;
    console.log(`Edit user with id: ${id}`);
});
router.route('/deleteuser/:id').delete(auth, adminAuth, (req, res) => {
    const { id } = req.params;
    console.log(`Delete user with id: ${id}`);
});

router.route('/signup').post(() => {
    console.log('signup');
});
router.route('/login').post(() => {
    console.log('login');
});

module.exports = router;