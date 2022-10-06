let extractStr = "Extract the world 'coding' from this string";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

/*
[ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ]
 */


/* formas de fazer com o match e o test
'string'.match(/regex/);
/regex/.test('string');
*/