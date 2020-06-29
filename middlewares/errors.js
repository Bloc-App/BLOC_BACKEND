import knex from "../lib/knex";

export default async (err, req, res, next) => {
  //console.log(err);
  console.log("err");
  //console.error(err.stack);
  await knex("errorlogs").insert({ data: err.stack });
  return res.status(400).json({
    success: false,
    message: error.message,
    data: null
  });
};
