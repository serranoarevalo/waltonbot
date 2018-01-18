const check = require("./check");

function activate() {
  setInterval(check, 86400000);
  check();
  return "activated";
}

module.exports = activate;
