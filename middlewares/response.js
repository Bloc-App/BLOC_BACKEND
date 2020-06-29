"use strict";
import mung from "express-mung";

const findAndDeleteProperty = function(object, properties) {
  if (object === undefined || !object.data) {
    return object;
  }
  for (const property of properties) {
    if (object.data.hasOwnProperty(property)) {
      delete object[property];
    }
  }

  var keys = Object.keys(object.data);
  for (const key of keys) {
    if (/Id/.test(key)) {
      delete object[key];
    }
    if (typeof object[key] === "object" && !Array.isArray(object[key])) {
      findAndDeleteProperty(object.data[key], properties);
    }
  }

  return object;
};

function redact(body, req, res) {
  let forbiddenProperties = ["Id", "CreatedAt", "UpdatedAt"];
  return findAndDeleteProperty(body, forbiddenProperties);
}

module.exports = mung.json(redact);
