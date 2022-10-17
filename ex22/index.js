let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d$/i; // Change this line
let result = userCheck.test(username);

console.log(result);


/*userCheck vai começar pegando somente strings, a flag i vai fazer
com que eu pegue tanto upperCase como lowerCase, depois vou dizer
que os números vão ficar somente no final do nome, com o "ou" eu vou repetir
a mesma coisa falando que o nome do usuário começa com letra e finalizado com 
números*/