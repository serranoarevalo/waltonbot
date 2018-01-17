import check from "./check";
function index() {
  let started = false;
  if (!started) {
    // setInterval(() => {
    //   started = true;
    //   check();
    // }, 1000);
    check();
  }
  return "ok";
}

export default index;
