const fetch = require("node-fetch");
function index() {
  setTimeout(() => {
    fetch("https://waltonbot.now.sh/");
  }, 5000);
  return "ok";
}

module.exports = index;
