// Capitalization
// Input:hi guvi
// output:Hi Guvi

let originalStr='hi guvi'
let result=originalStr.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(result);