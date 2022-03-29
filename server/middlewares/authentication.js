const { verifyToken } = require("../helpers/jwt");
const {  user } = require("../models");

const userAuthentication = async (req, res, next) => {
  try {
    const { access_token: token } = req.headers;
    const payload = verifyToken(token);
    let userData = await user.findByPk(payload.id);
    
    if (!userData) {
      throw { name: "JsonWebTokenError" };
    }

    req.user = {
      id: userData.id,
      email: userData.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userAuthentication;