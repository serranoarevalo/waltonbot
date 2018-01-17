const microAPI = require("micro-api");
const index = require("./controllers/index.js");
const activate = require("./controllers/activate.js");

exports.default = microAPI([
  {
    method: "get",
    path: "/",
    handler: index
  },
  {
    method: "get",
    path: "/activate",
    handler: activate
  }
]);
