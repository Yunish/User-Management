const HTTP_STATUS_CODE = [
  {
    label:
      "Continue: The server has received the request headers and the client should proceed to send the request body.",
    value: 100,
  },
  {
    label:
      "Switching Protocols:The requester has asked the server to switch protocols.",
    value: 101,
  },
  { label: "OK: The request was successful.", value: 200 },
  {
    label:
      "Created: The request was successful, and a new resource was created.",
    value: 201,
  },
  {
    label:
      "No Content: The server successfully processed the request, but there is no content to send.",
    value: 204,
  },
  {
    label:
      "Multiple Choices: Indicates multiple options for the resource from which the client can choose.",
    value: 300,
  },
  {
    label:
      "Moved Permanently: This and all future requests should be directed to the given URI",
    value: 301,
  },
  {
    label: "Found: Tells the client to look at another URL",
    value: 302,
  },
  {
    label:
      "Not Modified: Indicates that the resource has not been modified since the version specified by the request headers.",
    value: 304,
  },
  {
    label:
      "Bad Request: The request could not be understood or was missing required parameters.",
    value: 400,
  },
  {
    label:
      "Unauthorized: Authentication is required and has failed or not been provided.",
    value: 401,
  },
  {
    label:
      "Forbidden: The server understood the request, but refuses to authorize it.",
    value: 403,
  },
  {
    label:
      "Not Found: The requested resource could not be found on the server.",
    value: 404,
  },
  {
    label:
      "Internal Server Error: A generic error message returned when an unexpected condition was encountered by the server.",
    value: 500,
  },
  {
    label:
      "Not Implemented: The server does not support the functionality required to fulfill the request.",
    value: 501,
  },
  {
    label:
      "Service Unavailable: The server is not ready to handle the request. Common causes include a server that is down for maintenance or is overloaded.",
    value: 503,
  },
];

const SUCCESS_STATUS_CODES = [200, 201, 204];

const getResponseMessageByStatusCode = (statusCode) => {
  const msg = HTTP_STATUS_CODE.find((status) => status.value === statusCode);
  if (!msg) {
    return "Unable to identify the process";
  }
  return msg.label;
};

module.exports = {
  HTTP_STATUS_CODE,
  SUCCESS_STATUS_CODES,
  getResponseMessageByStatusCode,
};
