const jwt = require('../utils/jwt');

class Auth {
    async authenticate(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1]; // ✅ Correct
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const decodedToken = await jwt.verifyToken(token);
        if (!decodedToken) {
            return res.status(401).json({ message: 'Token not valid' });
        }
        req.user = decodedToken;
        next();
    }

    async authorizeRole (req, res, next) {
        const role = req.header('role')
        if (role !== 'admin') {
            return res.status(403).json({ message: 'Role not authorized' });
        }
        next();
    }
}

module.exports = new Auth();