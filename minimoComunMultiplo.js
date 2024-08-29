
/*
Escriba una función leastCommonMultiple(num1, num2)que acepte dos números
como argumentos. Las funciones deben devolver
el número más pequeño que sea divisible por num1y num2.
*/

let leastCommonMultiple = function(num1, num2) {
    for (let i = 1; i <= (num1 * num2); i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
};

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
