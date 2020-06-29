import jwt from "jsonwebtoken";

/**
 * @class Authorization
 * @description Contains methods for verifying and generation JWT tokens
 * @exports Authorization
 */

export default class Authorization {
  /**
   *
   * @method authorize
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next express next function
   * @param {string} role express response object
   * @returns {object} returns...
   */
  static async authorize(req, res, next, role = null) {
    const authHeader = req.header("authorization");
    if (!authHeader) {
      res.status(401).json({
        success: false,
        message: "Authentication token is required",
        data: null
      });
      return;
    }

    const token = authHeader.split(" ")[1];
    try {
      let account = jwt.verify(token, "secret");
      if (role && role != account / Code) {
        res.status(403).json({
          success: false,
          message: "You do not have sufficient priviledges to access",
          data: null
        });
      }
      req.account = account;
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({
        success: false,
        message: "Authentication token expired",
        data: null
      });
    }
  }
}
