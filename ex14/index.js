let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[a-z]*?1>/; // outra solução /<.*?>/;
let result = text.match(myRegex);

console.log(result);

/*
[ '<h1>',
  index: 0,
  input: '<h1>Winter is coming</h1>',
  groups: undefined ]
*/

// /t[a-z]*?i/ vai me retornar ["ti"] por ser um lazy matching

// /t[a-z]*i/ vai me retornar ["tinani"] por ser um greedy