// 1
let m, k, name;

m = 4; k = 14;

switch (k) {
    case 6:
        name = 'six';
        break;
    case 7:
        name = 'seven';
        break;
    case 8:
        name = 'eight';
        break;
    case 9:
        name = 'nine';
        break;
    case 10:
        name = 'ten';
        break;
    case 11:
        name = 'jack';
        break;
    case 12:
        name = 'queen';
        break;
    case 13:
        name = 'king';
        break;
    case 14:
        name = 'joker';
        break;
    default:
        break;
}

if (name !== 'joker') {
    switch (m) {
        case 1:
            name += ' of spades';
            break;
        case 2:
            name += ' of clubs';
            break;
        case 3:
            name += ' of diamonds';
            break;
        case 4:
            name += ' of hearts';
            break;
        default:
            break;
    }
}

console.log(name);


//2
let numberOfDay;
numberOfDay = 127;

switch (numberOfDay % 7) {
    case 0:
        console.log('monday');
        break;
    case 1:
        console.log('tuesday');
        break;
    case 2:
        console.log('wednesday');
        break;
    case 3:
        console.log('thursday');
        break;
    case 4:
        console.log('friday');
        break;
    case 5:
        console.log('saturday');
        break;
    case 6:
        console.log('sunday');
        break;
}


//3
let n, nameOfYear;
n = 2012;

   //3.1
switch (n - 1984 % 12) {
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
switch (n - 1984 % 60) {

}
