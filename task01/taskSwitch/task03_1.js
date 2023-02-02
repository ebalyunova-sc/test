let n, nameOfYear;
n = 2012;

switch ((n - 1984) % 12) {
    case 0:
        nameOfYear = 'rat';
        break;
    case 1:
        nameOfYear = 'ox';
        break;
    case 2:
        nameOfYear = 'tiger';
        break;
    case 3:
        nameOfYear = 'rabbit';
        break;
    case 4:
        nameOfYear = 'dragon';
        break;
    case 5:
        nameOfYear = 'snake';
        break;
    case 6:
        nameOfYear = 'horse';
        break;
    case 7:
        nameOfYear = 'sheep';
        break;
    case 8:
        nameOfYear = 'monkey';
        break;
    case 9:
        nameOfYear = 'rooster';
        break;
    case 10:
        nameOfYear = 'dog';
        break;
    case 11:
        nameOfYear = 'pig';
}

switch ((n - 1984) % 10) {
    case 0 || 1:
        nameOfYear += ', green';
        break;
    case 2 || 3:
        nameOfYear += ', red';
        break;
    case 4 || 5:
        nameOfYear += ', yellow';
        break;
    case 6 || 7:
        nameOfYear += ', white';
        break;
    case 8 || 9:
        nameOfYear += ', black';
        break;
}

console.log(nameOfYear);
