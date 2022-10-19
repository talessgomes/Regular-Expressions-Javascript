let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace).length;


console.log(result); //5


/*\s vai encontrar tudo que for espaço em branco, nesse caso, vai ter 5
espaços vazios, logo o retorno vai ser 5, pois usei a flag global para pegar
todos os valores */