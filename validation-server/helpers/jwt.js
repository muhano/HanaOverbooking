const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY

const signToken = (value) => {
    return jwt.sign(value, SECRET_KEY, { algorithm: 'HS512' });
}

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY, { algorithm: 'HS512'});
}

const signClientToken = (value) => {
    return jwt.sign(value, SECRET_KEY, { algorithm: 'HS512', expiresIn: '900s'});
}

const verifyClientToken = (token, public_key) => {
    const public_key_secret=`
-----BEGIN PUBLIC KEY-----
${public_key}
-----END PUBLIC KEY-----
`
    return jwt.verify(token, public_key_secret, { algorithm: 'RS256'});
}

module.exports = {signToken, verifyToken, signClientToken, verifyClientToken}