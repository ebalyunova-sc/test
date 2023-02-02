let n, str;
n = 5; str = '';

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            str += '* ';
        }
    }
    else {
        for (let j = 0; j < n - 1; j++) {
            str += ' *';
        }
    }
    str += '\n';
}

console.log(str);