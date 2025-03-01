const express = require('express');
const router = express.Router();
const UserController = require('../controller/user_controller');
const auth = require('../middleware/auth');

// Middleware for Content-Type validation
const validateContentType = (req, res, next) => {
    if (req.method !== 'GET' && req.get('Content-Type') !== 'application/json') {
        return res.status(415).json({ message: 'Unsupported Media Type. Only application/json is allowed.' });
    }
    next();
};

// Add user (Requires Content-Type validation)
router.post('/users', validateContentType, async (req, res, next) => {
    try {
        await new UserController().AddUser(req, res);
    }
    catch (err) {
        next(err);
    }
});

// Get all users (Requires authentication)
router.get('/users', auth.authenticate, async (req, res, next) => {
    try {
        await new UserController().GetAllUser(req, res);
    }
    catch (err) {
        next(err);
    }
});

// Get user by ID (Requires authentication)
router.get('/users/:id', auth.authenticate, async (req, res, next) => {
    try {
        await new UserController().GetUserById(req, res);
    } catch (err) {
        next(err);
    }
});

// Update user (Requires authentication & Content-Type validation)
router.put('/users/:id', auth.authenticate, validateContentType, async (req, res, next) => {
    try {
        await new UserController().UpdateUser(req, res);
    } catch (err) {
        next(err);
    }
});

// Delete user (Requires authentication, authorization & Content-Type validation)
router.delete('/users/:id', auth.authenticate, auth.authorizeRole, validateContentType, async (req, res, next) => {
    try {
        await new UserController().DeleteUser(req, res);
    } catch (err) {
        next(err);
    }
});

// User login (Requires Content-Type validation)
router.post('/users/login', validateContentType, async (req, res, next) => {
    try {
        await new UserController().LoginUser(req, res);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
