const { verifyToken } = require("../helpers/jwt");
const { data_process_api } = require("../models");

const userAuthentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      throw {name: 'falseAuthorization'}
    }

    if (authorization.split(' ')[0] !== "Bearer") {
      throw { name: "JsonWebTokenError" };
    }

    const token = authorization.split(' ')[1]

    const payload = verifyToken(token);
    let clientData = await data_process_api.findOne({ where: { client_id: payload.client_id } });

    if (!clientData) {
      throw { name: "JsonWebTokenError" };
    }

    req.user = {
      client_id: clientData.client_id,
      service_name: clientData.service_name,
    };

    // console.log(req.user, '<-----');

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userAuthentication;