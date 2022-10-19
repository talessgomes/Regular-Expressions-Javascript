let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result); //true

/*Eu coloquei Haz{4,}ah, porque ele vai pegar Haz
vai conseguir pegar o quanto de z for ter dentro da string
e para finalizar, o haRegex, entende que a string termina com ah. */