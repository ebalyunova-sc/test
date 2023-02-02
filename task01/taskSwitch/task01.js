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