import db from "./../lib/db";

export default async (req, res, next) => {
  const pool = await db.getPool();
  req.pool = pool;
  next();
};
