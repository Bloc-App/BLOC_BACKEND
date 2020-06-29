import logger from "./../lib/logger";

export default async (req, res, next) => {
  req.log = logger;
  next();
};
