let number, r, k, numberStr; // где r - рубли, а k - копейки

number = 11225; numberStr = number + ' - ';

r = (number - number % 100) / 100;
k = number % 100;

if ((r % 100 > 10) && (r % 100 < 20)) {
    numberStr += r + ' рублей ';
}
else {
    switch (r % 10) {
        case 1:
            numberStr += r +' рубль ';
            break;
        case 2 || 3 || 4:
            numberStr += r +' рубля ';
            break;
        default:
            numberStr += r + ' рублей ';
    }
}

if ((k % 100 > 10) && (k % 100 < 20)) {
    numberStr += k + ' копеек';
}
else {
    switch (k % 10) {
        case 1:
            numberStr += k + ' копейка';
            break;
        case 2 || 3 || 4:
            numberStr += k + ' копейки';
            break;
        default:
            numberStr += k + ' копеек';
    }
}
console.log(numberStr);


