let arr = [1, 0, -1, 2, 3, -10];

let posNumbers = [];
let sum = 0;

for (const item of arr) {
    if (item > 0) {
        posNumbers.push(item);
        sum += item;
    }
}

console.log('Positive numbers are ' + posNumbers.join(', '));
console.log(sum + ' is the sum of all positive numbers');