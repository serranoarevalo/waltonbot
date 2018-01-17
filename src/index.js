const microAPI = require("micro-api");
const index = require("./controllers/index.js");

exports.default = microAPI([
  {
    method: "get",
    path: "/",
    handler: index
  }
]);
