const UserRepositories = require('../repositories/user_repositories');
const UserEntity = require('../entity/UserEntity');
const Hash  = require('../utils/hash');
const jwt = require('../utils/jwt');
const errMessage = require('../constant/err-message');


class UserService {
    constructor() {
        this.UserRepositories = new UserRepositories();
        this.jwt = jwt;
    }

    async AddUser(data) {
        if (!data.email) {
            throw new Error('Email is required');
        }

        const emailExists = await this.UserRepositories.GetUserEmail(data.email);

        if (emailExists) {
            throw new Error('Email already exists');
        }

        const hashedPassword = await Hash.hashPassword(data.hash_password);

        const user = {
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            user_email: data.email,
            hash_password: hashedPassword
        };

        return await this.UserRepositories.AddUser(user);
    }

    async GetAllUser() {
        return await this.UserRepositories.GetAllUser();
    }

    async GetUserById(id) {
        return await this.UserRepositories.GetUserById(id);
    }

    async UpdateUser(data, id) {
        const userUpdate = new UserEntity({
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            user_email: data.email
        });
    
        return await this.UserRepositories.UpdateUser(userUpdate, id);
    }
    
    async DeleteUser(id) {
        return await this.UserRepositories.DeleteUser(id);
    }
    
    async LoginUser(email, password) {
        const user = await this.UserRepositories.GetUserEmail(email);
    
        if (!user) {
            throw new Error(errMessage.errNotFound);
        }
    
        const isPasswordValid = await Hash.verifyPassword(password, user.hash_password);
    
        if (!isPasswordValid) {
            throw new Error(errMessage.errPassword);
        }

        /*
            TODO: generate token using JWT and return token and user
        */

        const token = await this.jwt.generateToken(user);
        return token;
    }
    
}

module.exports = UserService;  
