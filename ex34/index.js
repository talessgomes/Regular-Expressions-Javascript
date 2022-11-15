let hello = "   Hello, World!  ";
let wsRegex = /\s\s+/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line


console.log(result);

/*Colocando \s eu vou cobrir o espaço em branco, colocando a flag g, 
eu cobrir o espaço em branco que vai ter no outro lado, já que ela é global,
 */