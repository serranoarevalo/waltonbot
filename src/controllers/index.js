import check from "./check";
function index() {
  setInterval(check, 1000);
  return "ok";
}

export default index;
