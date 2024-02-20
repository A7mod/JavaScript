// callback hell

function loadingData(callback) {
  setTimeout(() => {
    console.log("1) Loading Data ....");
    callback();
  }, 4000); // this is taking 4 secs
}
function collectingData() {
  console.log("2) Collecting Data ....");
}
function approvingData() {
  console.log("3) Approving Data ....");
}
function approved() {
  console.log("4) Approved!");
}

loadingData(function () {
  collectingData();

  approvingData();

  approved();
});
