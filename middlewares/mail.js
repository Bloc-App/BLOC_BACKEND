import path from "path";
import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);

export default async (req, res, next) => {
  const templatesDirectory = path.join(__dirname, "./../mail/templates");
  const confirmPassword = await readFileAsync(
    path.join(templatesDirectory, "confirmPassword.html"),
    "utf-8"
  );
  const mailTemplates = {
    confirmPassword
  };
  req.mailTemplates = mailTemplates;
  next();
};
