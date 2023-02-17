// Реализовать вычисление функции Аккермана через рекурсию с мемоизацией (кешированием)
// промежуточных результатов. Функция растет очень быстро,
// поэтому ограничиться вычислением А(3, 3), А(3, n) или А(4, 2).

let arr = [];
for (let i = 0; i <= 4; i++) {
    arr[i] = [];
    for (let j = 0; j <= 4; j++) {
        arr[i][j] = null;
    }
}

function ackerman(n, m) {
    if (arr[n][m] !== null) {
        return arr[n][m];
    }
    else {
        if (n !== 0) {
            if (m !== 0) {
                arr[n][m] = ackerman(n - 1, ackerman(n, m - 1));
                return arr[n][m];
            }
            else {
                arr[n][m] = ackerman(n - 1, 1);
                return arr[n][m];
            }
        }
        else {
            arr[n][m] = m + 1;
            return arr[n][m];
        }
    }
}

console.log(ackerman(2, 1));
for (let i = 0; i <= 4; i++) {
    console.log(arr[i]);
}