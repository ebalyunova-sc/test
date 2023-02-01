let a, b, c, d;

a = 3; b = 6;
c = 3; d = 2;

//ладья
if (a === c || b === d) {
    console.log('rook - yes');
}
else {
    console.log('rook - no');
}
//слон
if (a - c === b - d) {
    console.log('bishop - yes');
}
else {
    console.log('bishop - no');
}
//король
if ((a === c && (b === d - 1 || b === d + 1)) ||
    (b === d && (a === c - 1 || a === c + 1))) {
    console.log('king - yes');
}
else {
    console.log('king - no');
}
//ферзь
if (a === c || b === d || a -c === b - d){
    console.log('queen - yes');
}
else {
    console.log('queen - no');
}