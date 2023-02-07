// Крестики-Нолики. Реализовать игру Крестики-Нолики (консольный вариант)

let box = []
let endGame = 0;
let arr = [0, 0, 0, 2, 1, 1, 2, 0, 2, 2];

for (let i = 0; i < 3; i++) {
    box[i] = [];
    for (let j = 0; j < 3; j++) {
        box[i][j] = ' ';
    }
}

for (let i = 1; i < 10; i++) {
    if (i % 2 === 1) {

    }
}

function getBox() {
    for (let i = 0; i < 3; i++) {
        console.log(box[i][0] + '|' + box[i][1] + '|' + box[i][2]);
    }
}

function enter(x, y, symbol) {
    if (box[x][y] === ' ') {
        box[x][y] = symbol;
        return 1;
    }
    else {
        return 0;
    }
}

function check(symbol) {
    for (let i = 0; i < 3; i++) {
        if (box[i][0] === symbol && box[i][1] === symbol && box[i][2] === symbol) {
            return 1;
        }
        else if (box[0][i] === symbol && box[1][i] === symbol && box[2][i] === symbol) {
            return 1;
        }
    }
    if ((box [0][0] === symbol && box[1][1] === symbol && box[2][2] === symbol) ||
        (box [0][2] === symbol && box[1][1] === symbol && box[2][0] === symbol)) {
        return 1;
    }
    return 0;
}

function clear() {
    for (let i = 0; i < 3; i++) {
        box[i] = [];
        for (let j = 0; j < 3; j++) {
            box[i][j] = ' ';
        }
    }
}