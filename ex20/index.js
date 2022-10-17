let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig; // Change this line
let result = movieName.match(numRegex).length;

console.log(result); //4


/* \d vai equilaver a qualquer número entre 0-9, isso seria
igual a [0-9], nesse exercício, eu vou pegar somente os
número que existem em uma string, logo vou ter o retorno de 4 */