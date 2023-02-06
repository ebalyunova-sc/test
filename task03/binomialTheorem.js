// Написать рекурсивную функцию, которая возвращает массив с биномиальными
// коэффициентами n-ой степени. Коэффициенты в разложении бинома Ньютона (1 + х) n по степеням х.
// Например, для х = 3: (1 + х) ** 3 = (1 + х) * (1 + х) * (1 + х) = 1 + 3х + 3х2 + х**3.
// Соответственно, массив биномиальных коэффициентов для n=3 равен (1, 3, 3, 1).
// Коэффициенты n-й степени вычислять через рекурсивное обращение к коэффициентам n-1 й степени.
// Подсчитать количество рекурсивных вызовов, подсчет количества вызовов реализовать через замыкание.

function counterBinomialCoefficient(counter = 0) {
    let x = [];
    return function binomialTheorem(pow) {
       if (pow !== 0 && pow !== 1){
           counter++;
           x = binomialTheorem(pow - 1);
           x.push(1);
           for (let i = pow - 1; i > 0; i--) {
               x[i] += x[i - 1];
           }
           return x;
       }
       else if (pow === 1) {
           return [1,1];
       }
       else {
           return [1];
       }
    }
}
console.log(counterBinomialCoefficient()(4));