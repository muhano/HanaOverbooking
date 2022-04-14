const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY

const signToken = (value) => {
    return jwt.sign(value, SECRET_KEY, { algorithm: 'HS512', expiresIn: '900s'});
}

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY, { algorithm: 'HS512'});
}

module.exports = {signToken, verifyToken}