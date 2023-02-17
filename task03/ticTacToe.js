// Крестики-Нолики. Реализовать игру Крестики-Нолики (консольный вариант)

let box = [], endGame, move;
let arr1 = [], arr2 = [];
arr1[1] = [2, 2]; arr1[3] = [0, 1]; arr1[5] = [1, 0]; arr1[7] = [2, 0]; arr1[9] = [2, 1];
arr2[1] = [0, 2]; arr2[3] = [1, 0]; arr2[5] = [1, 1]; arr2[7] = [2, 1]; arr2[9] = [2, 2];

game(arr2);
game(arr1);


function game(arr) {
    clear();
    while (endGame === 0) {
        enter(arr[move][0], arr[move][1], 'x');
        getBox();
        if (check('x')) {
            endGame = 1;
            console.log('x winner!')
            break;
        }
        else {
            move++;
        }

        if (move === 10) {
            console.log('dead heat')
            break;
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (enter(i, j, 'o')) {
                    i = 3;
                    j = 3;
                }
            }
        }
        getBox();
        if (check('o')) {
            endGame = 1;
            console.log('o winner!')
            break;
        }
        else {
            move++;
        }
    }
}

function clear() {
    for (let i = 0; i < 3; i++) {
        box[i] = [];
        for (let j = 0; j < 3; j++) {
            box[i][j] = ' ';
        }
    }
    move = 1;
    endGame = 0;
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

function getBox() {
    for (let i = 0; i < 3; i++) {
        console.log(box[i][0] + '|' + box[i][1] + '|' + box[i][2]);
    }
    console.log();
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