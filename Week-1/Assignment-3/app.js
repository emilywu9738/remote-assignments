// 第一題
function countAandB(input) {
    let count = 0;
    for (let i of input) {
        if (i === "a" || i === "b") {
            count++;
        }
    }
    return count;
}

// 第二題
function toNumber(input) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i of input) {
        result.push(alphabet.indexOf(i) + 1)
    };
    return result;
}