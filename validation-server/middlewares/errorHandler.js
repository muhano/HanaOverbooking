const errorHandler = (err, req, res, next) => {
  console.log(err)
  statusCode = 500;
  message = "Internal server error";

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
    statusCode = 401
    message = "Invalid token"
  } else if (err.name === "notFound") {
    statusCode = 404
    message = "Instance not found"
  } else if (err.name === "SequelizeDatabaseError") {
    statusCode = 400;
    message = "invalid input data type";
  } else if (err.name === "noHeader") {
    statusCode = 400;
    message = "Missing mandatory header parameters";
  } else if (err.name === "clientNotFound") {
    statusCode = 401
    message = "Invalid header X-CLIENT-KEY"
  } else if (err.name === "noBody") {
    statusCode = 400;
    message = "Missing mandatory body parameters";
  } else if (err.name === "invalidDate") {
    statusCode = 401;
    message = "Invalid format header X-TIMESTAMP";
  } else if (err.name === "falseClientSecret") {
    statusCode = 401;
    message = "Invalid body grant_type";
  }  else if (err.response) {
    if (err.response.data.message === "Invalid Token") {
      statusCode = 401;
      message = "Invalid header X-SIGNATURE token";
    } else if (err.response.data.message === "Client not found") {
      statusCode = 401;
      message = "Invalid header X-CLIENT-KEY";
    } else if (err.response.data.message === "Invalid body grant_type value") {
      statusCode = 401;
      message = "Invalid body grant_type";
    } else if (err.response.data.message === "Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP") {
      statusCode = 401;
      message = "Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP";
    }
  } else if (err.name === "XSignatureMismatch") {
    statusCode = 401;
    message = "Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP";
  } 

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
