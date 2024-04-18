// A. Complete the function below to show a delayed result in the console.
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => callback(n1 + n2), delayTime);
}

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});
