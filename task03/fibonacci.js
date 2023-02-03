// Написать реализацию вычисления числа Фибоначчи через рекурсию
// с подсчетом количества произведенных вызовов функции.
// Подсчет количества вызовов функции реализовать через замыкание.

function counterFibonacci(counter = 0) {
    return function fibonacci(number) {
        counter++;
        if (number !== 1 && number !== 2) {
            return fibonacci(number - 2) + fibonacci(number - 1);
        } else {
            return 1;
        }
    }
}

let res = counterFibonacci()(5);
console.log(res);