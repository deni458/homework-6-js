let numbers = [1, 2, 3, 4, 5, 6,];

let sum = 0;
let average = 0;
let counter = 0;
let numB = [];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    average = sum / numbers.length;
}
for (let j = 0; j < numbers.length; j++) {    
    if (numbers[j] > average) {        
        counter++;
        numB.push(numbers[j]);
    }
}

console.log('The sum of all elements in array is ' + sum);
console.log('Average of the elements in array is ' + average);
console.log('The number of elements that are bigger than their avarage ' + average + ' is ' + counter);
console.log('Elements that are bigger then their average is ' + numB.join(', '));