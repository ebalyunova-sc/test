n = 6;
let d = [];
let str = [];

for (let i = 0; i < n; i++) {
    d[i] = [];
    for (let j = 0; j <= i; j++) {
        if (j !== 0 && j !== i) {
            d[i][j] = d[i-1][j-1] + d[i-1][j];
        }
        else {
            d[i][j] = 1;
        }
    }
}

for (let i = 0; i < n; i++) {
    str[i] = '';
    for (let j = 0; j <= i; j++) {
        str[i] += ' ' + d[i][j];
    }
}

for (let i = 0; i < n; i++) {
    console.log(str[i]);
}