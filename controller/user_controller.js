const UserService = require('../service/user_service');
const jwt = require('../utils/jwt');
const errMessage = require('../constant/err-message');
const BaseResponse = require('../utils/base-reponse');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async AddUser(req, res) {
        try {
            const newUser = await this.userService.AddUser(req.body);
            res.status(201).json({ message: "Success add user", data: newUser });
        } catch (error) {
            res.status(500).json({ message: "Failed to add user", error: error.message });
        }
    }

    async GetAllUser(req, res) {
        try {
            const users = await this.userService.GetAllUser();
            res.status(200).json({ message: "Success get all user", data: users });
        } catch (error) {
            res.status(500).json({ message: "Failed to get all user", error: error.message });
        }
    }

    async GetUserById(req, res) {
        try {
            const user = await this.userService.GetUserById(req.params.id);
    
            if (!user) {
                return res.status(404).json({ message: "There is no user with that ID" });
            }
    
            res.status(200).json({ message: "Success get user by id", data: user });
        } catch (error) {
            res.status(500).json({ message: "Failed to get user by id", error: error.message });
        }
    }
    

    async UpdateUser(user, id) {
        return db('users').where({ id }).update(user);
    }
    
    

    async UpdateUser(req, res) {
        try {
            const users = await this.userService.UpdateUser(req.body, req.params.id);
            res.status(200).json({ message: "success update", data: users });
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong', error: e.message });
        }
    }
    
    async DeleteUser(req, res) {
        try {
            const users = await this.userService.DeleteUser(req.params.id);
            res.status(200).json({ message: "success delete", data: users });
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong', error: e.message });
        }
    }

    async LoginUser(req, res) {
        try {
            const users = await this.userService.LoginUser(req.body.email, req.body.password);
    
            if (!users) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
    
            // Generate JWT token
            const token = await jwt.generateToken({ id: users.id, email: users.email });
    
            // Set token in HTTP-only cookie
            res.cookie('token', token, {  
                httpOnly: true,
                secure: true,  
                sameSite: 'none',  
                maxAge: 1000 * 60 * 60 * 24 // 1 day expiration
            });
    
            res.json(BaseResponse.success("Success login", users));
        } catch (e) {
            return res.json(BaseResponse.error(e.message));
            // switch (e.message) {
            //     case errMessage.errNotFound:
            //         res.status(404).json({ message: errMessage.errNotFound });
            //         break;
            //     case errMessage.errPassword:
            //         res.status(401).json({ message: errMessage.errPassword });
            //         break;
            //     default:
            //         res.status(500).json({ message: "Something went wrong", error: e.message });
            // }
        }
    }    
    
    
}

module.exports = UserController;  // ✅ Export the class
