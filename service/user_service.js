const UserRepositories = require('../repositories/user_repositories');

class UserService {
    constructor() {
        this.UserRepositories = new UserRepositories();
    }

    async AddUser(data) {
        if (!data.email) {
            throw new Error('Email is required');
        }

        const user = {
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            user_email: data.email
        };

        return await this.UserRepositories.AddUser(user);
    }

    async GetAllUser() {
        return await this.UserRepositories.GetAllUser();
    }
}

module.exports = UserService;  // ✅ Export class, not an instance
