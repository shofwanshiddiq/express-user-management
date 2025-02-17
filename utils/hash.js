const bcrypt = require('bcryptjs');

class Hash {
    async hashPassword(password) {
        const saltRounds = 10
        return bcrypt.hash(password, saltRounds);
    }

    async verifyPassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}

module.exports = new Hash();
