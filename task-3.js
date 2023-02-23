let numbers = [1, 2, 3, 4, 5];

let sum = 3;
let check = false;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === sum) {
            console.log(numbers[i] + ' + ' + numbers[j] + ' = ' + sum);
            console.log(numbers[i] + ' and ' + numbers[j]);
            check = true;
            break;
        }
    }
}

if (check === false) {
    console.log('None of the given numbers sum is equal to ' + sum);
}