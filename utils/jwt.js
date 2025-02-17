const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

class Jwt {
    async generateToken(payload) {
        return jwt.sign(payload, secretKey, { expiresIn: expired });
    }

    async verifyToken(token) {
        try{
            return jwt.verify(token, secretKey);
        } catch(err) {
            throw new Error(err.message);
        }
    }
}

module.exports = new Jwt();