const { verifyToken } = require("../helpers/jwt");
const { data_process_api } = require("../models");

const userAuthentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw { name: "falseAuthorization" };
    }

    if (authorization.split(" ")[0] !== "Bearer") {
      throw { name: "JsonWebTokenError" };
    }

    const token = authorization.split(" ")[1];

    const payload = verifyToken(token);
    let clientData = await data_process_api.findOne({
      where: { client_id: payload.client_id },
    });

    if (!clientData) {
      throw { name: "JsonWebTokenError" };
    }

    req.user = {
      ...req.user,
      client_id: clientData.client_id
    };

    const service_name = clientData.service_name;
    const serviceArray = service_name.split(", ");
    const {service_code} = req.user

    if (!serviceArray.includes(service_code)) {
      throw { name: "noServicePrivilege" };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userAuthentication;
