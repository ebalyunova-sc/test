let x11, y11, x12, y12,
    x21, y21, x22, y22,
    x31, y31, x32, y32;

x11 = 1; y11 = 2; x12 = 5; y12 = 8;
x21 = 3; y21 = 4; x22 = 6; y22 = 9;

if (x11 <= x21) {
    x31 = x11;
}
else {
    x31 = x21;
}

if (y11 <= y21) {
    y31 = y11;
}
else {
    y31 = y21;
}

if (x12 >= x22) {
    x32 = x12;
}
else {
    x32 = x22;
}

if (y12 >= y22) {
    y32 = y12;
}
else {
    y32 = y22;
}

console.log('(' + x31 + ';' + y31 + '), (' + x32 + ';' + y32 + ')');