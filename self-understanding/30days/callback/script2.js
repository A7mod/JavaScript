// callback hell

function loadingData(callback) {
  setTimeout(() => {
    console.log("1) Loading Data ....");
    callback();
  }, 4000); // this is taking 4 secs
}
function collectingData(callback) {
  setTimeout(() => {
    console.log("2) Collecting Data ....");
    callback();
  }, 5000); // while this one is taking 5 seconds after the 4 secs
}
function approvingData(callback) {
  setTimeout(() => {
    console.log("3) Approving Data ....");
    callback();
  }, 3000);
}
function approved() {
  console.log("4) Approved!");
}

// callback hell

loadingData(function () {
  collectingData(function () {
    approvingData(function () {
      approved();
    });
  });
});

// we use promises to get away from this hell
