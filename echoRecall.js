
/*
Escriba una función echo que tome una cadena y console.loghaga "eco"
de esa cadena.
*/

function echo(string) {
    // your code here...
    let minuscula = string.toLowerCase();
    let mayuscula = string.toUpperCase();
    console.log( mayuscula + " ..." + string + " ..." + minuscula)
  }

  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
