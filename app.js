import express from "express";
import cron from "./services/CronService";
import createError from "http-errors";
import expressValidator from "express-validator";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
import docs from "./docs";
import config from "./config";
import { responseHandler } from "./middlewares/response";
import { ErrorHandler } from "./middlewares/error-handler";
import cors from "cors";
//import "./helpers/node-cron";
const app = express();
const router = require("./routes/index");

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

//cron();
app.use(
  fileUpload({
    limits: { fileSize: config.app_settings.fileSizeLimit * 1024 * 1024 },
  })
);

app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./middlewares/response"));
app.use("/", router);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(docs));
//app.use(responseHandler);
app.all("*", (req, res) => {
  res.status(404).json({ success: false, error: "Resource not found" });
});
app.use(ErrorHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
