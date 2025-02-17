const express = require('express');
const router = express.Router();
const UserController = require('../controller/user_controller');

router.post('/users', async  (req, res, next) => {
    try {
        await new UserController().AddUser(req, res);
    }
    catch (err) {
        next(err);
    }
    
});

router.get('/users', async (req, res, next) => {
    try {
        await new UserController().GetAllUser(req, res);
    }
    catch (err) {
        next(err);
    }
});

router.get('/users/:id', async (req, res, next) => {
    try {
        await new UserController().GetUserById(req, res);
    }
    catch (err) {
        next(err);
    }
});

router.put('/users/:id', async (req, res, next) => {
    try {
        await new UserController().UpdateUser(req, res);
    } catch (err) {
        next(err);
    }
});

router.delete('/users/:id', async (req, res, next) => {
    try {
        await new UserController().DeleteUser(req, res);
    } catch (err) {
        next(err);
    }
});

router.post('/users/login', async (req, res, next) => {
    try {
        await new UserController().LoginUser(req, res);
    } catch (err) {
        next(err);
    }
});

module.exports = router;