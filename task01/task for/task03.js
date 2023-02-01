let a = 12345, b = 0;

for (let i = 1; i <= 10000; i *= 10) {
    b += (a % (i * 10) - a % i) * (10000 / i ** 2);
}

console.log(a + ' - ' + b);