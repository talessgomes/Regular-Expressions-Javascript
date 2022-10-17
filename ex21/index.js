let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result); //17

/* \D equivale a mesma coisa que [^0-9], então ele não vai pegar
tudo que for números, nesse caso, ele vai pegar o espaço em branco
e as strings, que vai ser igual a 17 */

