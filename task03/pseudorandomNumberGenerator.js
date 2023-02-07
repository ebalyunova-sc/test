// Реализовать генератор псевдослучайных чисел

const  RAND_MAX = 2 ** 48;
let x = 1;

function prng() {
    x = (x * 252149039170 + 11) % RAND_MAX;
    return x;
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = prng();
}

console.log(arr);