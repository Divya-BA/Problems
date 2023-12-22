let originalStr='hi guvi'

// Reverse the string
// output:ivug ih

let result=originalStr.split('').reverse().join('');
console.log(result);

// Reverse the each word 
// output:iH ivuG

let result1=originalStr.split(' ').map((word)=>word.split('').reverse().join('')).join(' ');
console.log(result1);

