const db = require ('../db/db');

class UserRepositories {
    async AddUser(user) {
        return await db('users').insert(user);
    }

    async GetAllUser() {
        return db('users').select('*'); // ✅ Remove duplicate and fix reference
    }


    async GetUserById(id) {
        return db('users').where({ id }).first();
    }

    async GetUserEmail(email) {
        return db('users').where({ user_email: email }).first();
    }

    async UpdateUser(user, id) {
        return db('users').where({ id }).update(user);
    }
    async DeleteUser(id) {
        return db('users').where({ id }).del();
    }

    
}

module.exports = UserRepositories