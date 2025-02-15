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

module.exports = router;