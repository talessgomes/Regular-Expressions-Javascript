let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result); //[ 'ss', 'ss' ]
/*
A busca com o + e a flag G, vai procurar todas as letras que tem s, 
como a palavra Mississippi tem dois S juntos, o retorno vai ser [ 'ss', 'ss' ],
mas se fosse os 4 S juntos.
exemplo: missssi. O retorno seria ['ssss']
 */