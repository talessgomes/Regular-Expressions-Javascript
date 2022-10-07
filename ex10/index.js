let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result.length);



/*É possível pegar pegar os valores de letras e número que vão ficar dentro
de brackets*/

/* EXAMPLE

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
 */