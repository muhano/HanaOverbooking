const errorHandler = (err, req, res, next) => {
  console.log(err)
  statusCode = 500;
  message = "Internal server error"
  caseCode = '00'

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    statusCode = 400;
    message = err.errors[0].message;
  } else if (err.name === "badRequest") {
    statusCode = 400;
    message = "Please input email and Password";
  } else if (err.name === "wrongLogin") {
      statusCode = 401
      message = "Invalid email/password"
  } else if (err.name === "JsonWebTokenError") {
    caseCode = '01'
    statusCode = 401
    message = "Unauthorized. Invalid token"
  } else if (err.name === "notFound") {
    statusCode = 404
    message = "Instance not found"
  } else if (err.name === "SequelizeDatabaseError") {
    statusCode = 400;
    message = "invalid input data type";
  } else if (err.name === "noHeader") {
    caseCode = "02"
    statusCode = 400;
    message = "Missing mandatory header parameters";
  } else if (err.name === "clientNotFound") {
    statusCode = 401
    message = "Unauthorized. Invalid header X-CLIENT-KEY"
  } else if (err.name === "noBody") {
    caseCode = "02"
    statusCode = 400;
    message = "Missing mandatory body parameters";
  } else if (err.name === "invalidDate") {
    caseCode = "02"
    statusCode = 400;
    message = "Invalid format header X-TIMESTAMP";
  } else if (err.name === "falseClientSecret") {
    statusCode = 401;
    message = "Unauthorized. Invalid body grant_type";
  }  else if (err.response) {
    if (err.response.data.message === "Invalid Token") {
      caseCode = "01"
      statusCode = 401;
      message = "Unauthorized. Invalid header X-SIGNATURE token";
    } else if (err.response.data.message === "Client not found") {
      statusCode = 401;
      message = "Unauthorized. Invalid header X-CLIENT-KEY";
    } else if (err.response.data.message === "Invalid body grant_type") {
      statusCode = 401;
      message = "Unauthorized. Invalid body grant_type";
    } else if (err.response.data.message === "Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP") {
      caseCode = "01"
      statusCode = 401;
      message = "Unauthorized. Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP";
    }
  } else if (err.name === "XSignatureMismatch") {
    caseCode = "01"
    statusCode = 401;
    message = "Unauthorized. Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP";
  } else if (err.name === "noServiceCode") {
    statusCode = 500;
    message = "Service code not found"
  } else if (err.name === "TokenExpiredError") {
    caseCode = "01"
    statusCode = 401;
    message = "Unauthorized. Token expired, please request new token"
  } else if (err.name === "noServicePrivilege") {
    statusCode = 401;
    message = "Unauthorized. Client don't have privilige to access service"
  } else if (err.name === "falseAuthorization") {
    statusCode = 401;
    message = "Unauthorized. False Authorization type, please select Authorization type Bearer Token"
  } else if (err.name === "falsePath") {
    statusCode = 401;
    message = `Unauthorized. False path for service code ${req.user.service_code}`
  } 

  let service_code = undefined
  if (req.user) {
    service_code = req.user.service_code
  }

  if (service_code) {
    res.status(statusCode).json({ 
      responseCode : `${statusCode}${service_code}${caseCode}`,
      responseMessage : message 
    });
  } else {
    res.status(statusCode).json({ responseMessage : message });
  }

};

module.exports = errorHandler;
