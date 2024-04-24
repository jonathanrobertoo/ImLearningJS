function fizzbuzz(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return `FizzBuzz`;
    } else if (x % 5 === 0) {
        return `Buzz`;
    } else if (x % 3 === 0) {
        return `Fizz`;
    } else if (typeof x !== Number) {
        return x;
    } else {
        return;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i));
}
