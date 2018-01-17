import microAPI from "micro-api";
import index from "./controllers/index.js";

exports.default = microAPI([
  {
    method: "get",
    path: "/",
    handler: index
  }
]);
