let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace).length;

console.log(result); //38

/* EXAMPLE

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;//32
*/


/* \S vai pegar todo o espaço que conter um valor, diferente de \s
que só pegava o que não tinha valor, o retorno desse vai ser 38*/