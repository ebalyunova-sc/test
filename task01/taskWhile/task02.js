let counter = 0, n = 19, str = '';

while (counter < 15) {
    n += 19;
    if (n >= 100) {
        counter++;
        str += ' ' + n;
    }
}

console.log(str);