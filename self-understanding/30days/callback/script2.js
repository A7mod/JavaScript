// callback hell

function loadingData() {
  setTimeout(() => {
    console.log("1) Loading Data ....");
  }, 4000);
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

loadingData();

collectingData();

approvingData();

approved();
