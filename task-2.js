let strings = ["Jocka", "Test", "Test1", "Test", "Marko", "Marko"];

let duplicateString = 0;
let check = false;

for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
        if (strings[i] === strings[j]) {
            duplicateString = strings[i];
            check = true;
        }
    }
    if (check) {  // There we make break, when we find the first duplicate.
        break;
    }
}

if (check) {
    console.log('First duplicate string in this array is ->   ' + duplicateString);
} else {
    console.log('None, there are no strings that are duplicate.')
}