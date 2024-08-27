
/*
Escriba una función, countVowels(word), que tome una cadena de caracteres word y
devuelva el número de vocales de la palabra.
Las vocales son las letras "a", "e", "i", "o", "u".
*/

function countVowels(word) {
    // your code here...
    let vocales = "aeiou";
    let count = 0;
    let arr = []

    for(let i = 0; i < word.length; i++){
        if(vocales.includes(word[i])){
            count++

        }
    }return count
  };

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
