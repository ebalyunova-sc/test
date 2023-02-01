let c, d, time, sum;
let str4 = '1, 1, ';
c = d = 1;
sum = c + d;

while (d <= 1000) {
    time = c;
    c = d;
    d += time;
    if (d <= 1000) {
        sum += d;
        str4 += d + ', ';
    }
}

console.log(str4 + ' sum = ' + sum);