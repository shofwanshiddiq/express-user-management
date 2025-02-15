const UserService = require('../service/user_service');

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
}

module.exports = UserController;  // ✅ Export the class
