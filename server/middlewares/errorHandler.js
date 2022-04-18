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
  } else if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    statusCode = 401
    message = "Invalid Token"
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
    message = "Client not found"
  } else if (err.name === "noBody") {
    statusCode = 400;
    message = "Missing mandatory body parameters";
  } else if (err.name === "invalidDate") {
    statusCode = 400;
    message = "Invalid field format header X-TIMESTAMP";
  } else if (err.name === "falseClientSecret") {
    statusCode = 401;
    message = "Invalid body grant_type";
  } else if (err.name === "XSignatureMismatch") {
    statusCode = 401;
    message = "Header X-Signature token not match with X-CLIENT-KEY or X-TIMESTAMP";
  } 

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
