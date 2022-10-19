let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);

console.log(result);


/*{3,6} vai verificar se os valores que foram passados
vão estar entre 3 e 6, nesse caso vai ser true, já
que as letras que foram colocadas ao lado estão entre as letras 
que foram selecionadas */