const sendResponse = (res, statusCode, message, data = null, errors = null,  headers = {}) => {
    const response = {
      status: statusCode < 400 ? "success" : "error",
      code: statusCode,
      message,
    };
  
    if (data) response.data = data;
    if (errors) response.errors = { details: errors };
  
    response.headers = headers;
    res.status(statusCode).json(response);
  };

  module.exports = sendResponse