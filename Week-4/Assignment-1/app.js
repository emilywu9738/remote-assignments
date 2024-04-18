// A. Complete the function below to show a delayed result in the console.
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => callback(n1 + n2), delayTime);
}

// B. To implement delayed Result again using promise this time.It should look like:
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });
}

// C. To implement it using async/await this time.
async function main() {
  const result = await delayedResultPromise(4, 5, 3000);
  console.log(result);
}
