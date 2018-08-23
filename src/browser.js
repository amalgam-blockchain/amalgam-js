const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const memo = require('./auth/memo');
const utils = require("./utils");

const amalgam = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  memo,
  utils
};

if (typeof window !== "undefined") {
  window.amalgam = amalgam;
}

if (typeof global !== "undefined") {
  global.amalgam = amalgam;
}

exports = module.exports = amalgam;
