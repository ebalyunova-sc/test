let n, i;
n = 1300;
i = 0;

while (n > 2 ** i) {
    i++;
}
i--;

console.log(i + ' ' + (2 ** i));