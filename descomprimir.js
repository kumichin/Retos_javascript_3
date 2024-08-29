
/*
Escriba una función uncompress(str)que tome una cadena "comprimida" como argumento.
 Una cadena comprimida consiste en un carácter seguido inmediatamente por el
 número de veces que aparece en la forma "sin comprimir". La función debe devolver
  la versión sin comprimir de la cadena. Vea los ejemplos.

Sugerencia: puede usar la función incorporada Numberpara convertir una cadena
numérica en el tipo de número. Por ejemplo.Number("4") // => 4

Puedes asumir que el número de veces siempre será un número entero entre 0 y 9.
*/

let uncompress = function(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i += 2) {
        let char = str[i];
        let num = Number(str[i + 1]);

        for (let times = 0; times < num; times += 1) {
            newStr += char;
        }
    }

    return newStr;
};

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
