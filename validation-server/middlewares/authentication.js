const { verifyToken } = require("../helpers/jwt");
const {  data_process_api } = require("../models");

const userAuthentication = async (req, res, next) => {
  try {
    const { access_token: token } = req.headers;
    const payload = verifyToken(token);
    let clientData = await data_process_api.findOne({ where: { client_id : payload.client_id } });
    
    if (!clientData) {
      throw { name: "JsonWebTokenError" };
    }

    req.user = {
      client_id: clientData.client_id,
      service_name: clientData.service_name,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userAuthentication;