let arr = [3, 7, 1, 12, 5, 6, 11, 9, 2, 4, 10, 8];

for (let i = 0; i < arr.length / 2; i++) {
    let temp;
    for (let j = i; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    for (let j = arr.length - i - 1; j > i - 1; j--) {
        if (arr[j] < arr[j - 1]) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
}

console.log(arr);