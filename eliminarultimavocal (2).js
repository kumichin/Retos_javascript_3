
/*
Escriba una función removeLastVowel(word)que tome una cadena y
devuelva la cadena con su última vocal eliminada.
*/

function removeLastVowel(word){
    let arr = word.split("");
    let vocal = "aeiou";
    let word1 = "";

    for (i = word.length; i > 0; i--){
        let index = word[i]
        if( vocal.includes(index)){
            return word.slice(0, i) + word.slice(i + 1)

        }
    }return word;
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
