let arr = [1, 2, 4, 6, 7, 11];

let arrPrimes = [];

for (let i = 0; i < arr.length; i++) {

    let isPrime = true;

    // Check if the number is divisible by any number other than 1 and itself
    for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        arrPrimes.push(arr[i]);
    }
}

console.log('The prime numbers are ' + arrPrimes.join(', '));