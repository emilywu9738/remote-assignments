// Assignment 1
// 1.
function max(numbers) {
    let maxNum = numbers[0];
    for (let n of numbers) {
        if (n > maxNum) {
            maxNum = n;
        }
    } return maxNum;
}
// 2.
function findPosition(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == target) {
            return i + 1;
        }
    } return -1;
}

// Assignment 2
function avg(data) {
    let total = 0;
    let count = 0
    for (let i = 0; i < data.products.length; i++) {
        total += data.products[i].price;
        count++;
    } return total / count;
}

// Assignment 3
// 1.
function count(input) {
    return input.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue]++;
        } else {
            accumulator[currentValue] = 1;
        }
        return accumulator;
    }, {});
}
// 2.
function groupByKey(input) {
    return input.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue.key]) {
            accumulator[currentValue.key] += currentValue.value;
        } else {
            accumulator[currentValue.key] = currentValue.value;
        }
        return accumulator;
    }, {});
}