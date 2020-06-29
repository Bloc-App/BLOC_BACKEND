import { MethodNotAllowedError } from "../helpers/errors";

export const ErrorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.status)
    res.status(err.status).send({
      statusCode: err.statusCode,
      message: "Bad Request! Please try again"
    });
  else
    res.status(500).send({
      statusCode: err.statusCode,
      message: "Bad Request! Please try again"
    });
};
