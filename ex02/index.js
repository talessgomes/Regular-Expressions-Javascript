let waldoIsHiding = "Somewhere Waldo is Hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);



/*a variável waldoRegex vai pegar o valor waldo, no result, eu vou fazer o test e pegar
a variável waldoIsHiding e vou verificar se a palavra waldo, se ter, vai retornar true */

/* EXAMPLE

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
 */