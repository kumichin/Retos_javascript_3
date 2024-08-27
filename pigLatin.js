
/*
Pig Latin es una versión divertida del idioma inglés en la que se mueve cualquier
 grupo de consonantes desde el principio de la palabra hasta el final de la misma;
 cuando las palabras comienzan con vocal, simplemente se agrega "-yay".
 Las vocales son "aeiou".

Escriba una función pigLatinWordque tome una cadena de palabras y traduzca la
 palabra a Pig Latin. Para este problema, use el String.slice()método.
  El slice()método extrae una sección de una cadena y la devuelve como una
  nueva cadena, sin modificar la cadena original.

Sugerencia : ¡Recuerde el String.includesmétodo!
*/

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  // your code here...
  let vocales = "aeiou";
  if ( vocales.includes(word[0])){
          return word + "yay";
      }
  for ( i= 0; i < word.length; i++){
      let letter = word[i];
      if(vocales.includes(letter)){
          let primeraParte = word.slice(i);
          let segundaParte = word.slice(0, i)
          return primeraParte + segundaParte + "ay"
      }
      }
  };

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
