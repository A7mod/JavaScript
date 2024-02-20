// understanding set timeout

// console.log("This");

// setTimeout(fun, 0); // if we put value zero, the stack prevents functions to get manipulated in their place.

// function fun() {
//   console.log("Async");
// }

// console.log("Maybe");

// ----------------------------------------------------

// Moving forward to callback now.

function fun(val) {
  console.log(val);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum); // simply one function calling another function
}

add(5, 10, fun);
