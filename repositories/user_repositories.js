const db = require ('../db/db');

class UserRepositories {
    async AddUser(user) {
        return await db('users').insert(user);
    }

    async GetAllUser() {
        return db('users').select('*'); // ✅ Remove duplicate and fix reference
    }
    
}

module.exports = UserRepositories