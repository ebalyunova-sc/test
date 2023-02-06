// Написать математическую библиотеку, которая будет вычислять Пи, экспоненту, синус,
// косинус и еще какие-либо мат. функции используя разложение в ряд Макларена

function leibniz() {
    let pi = 0;
    for (let i = 0; i <= 1000; i++) {
        pi += (((- 1) ** i) / (2 * i + 1)) * 4;
    }
    return pi;
}

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

function exp(x) {
    let exp = 0;
    for (let i = 0; i <= 1000; i++) {
        exp += (x ** i) / factorial(i);
    }
    return exp;
}

function sin(x) {
    let s = 0;
    for (let i = 0; i <= 1000; i++) {
        s += (((- 1) ** i) * (x ** (2 * i + 1))) / factorial(2 * i + 1);
    }
    return s;
}

function cos(x) {
    let c = 0;
    for (let i = 0; i <= 1000; i++) {
        c += ((- 1) ** i) * (x ** (2 * i)) / factorial(2 * i);
    }
    return c;
}

console.log(exp(1));
console.log(leibniz());
console.log(sin(1));
console.log(cos(1));