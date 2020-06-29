export default async (req, res, next) => {
  const hostname = req.hostname;
  const baseUrl = req.protocol + "://" + hostname;
  req.baseUrl = baseUrl;
  process.env.APP_BASE_URL = baseUrl;
  process.env.HOSTNAME = hostname;
  process.env.EXTERNAL_BASE_URL = req.protocol + "://" + hostname;
  next();
};
