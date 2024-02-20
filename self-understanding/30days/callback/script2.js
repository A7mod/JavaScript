// callback hell

function loadingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1) Loading Data ....");
      resolve();
    }, 2000); // this is taking 4 secs
  });
}
function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2) Collecting Data ....");
      resolve();
    }, 3000); // while this one is taking 5 seconds after the 4 secs
  });
}
function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3) Approving Data ....");
      resolve();
    }, 3000);
  });
}
function approved() {
  console.log("4) Approved!");
}

// callback hell

// loadingData(function () {
//   collectingData(function () {
//     approvingData(function () {
//       approved();
//     });
//   });
// });

// we use promises to get away from this hell

// calling those functions with promises
loadingData().then(collectingData).then(approvingData);
