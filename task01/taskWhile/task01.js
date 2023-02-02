let n, p;
let a = [];
let i = 0;

n = 40; p = 2;

while (i <= n - 2) {
    a[i] = i + 2;
    i++;
}
while (i < n) {
    i = 2 * p - 2;
    while (i < a.length) {
        a[i] = 0;
        i += p;
    }
    i = 2 * p - 3;
    while (i < n) {
        if (a[i] !== 0) {
            p = a[i];
            break;
        }
        i++;
    }
}

i = 0;

let str = '';
while (i <= n - 2) {
    if (a[i] !== 0 ) {
        str += a[i] + ', ';
    }
    i++;
}

console.log(str);