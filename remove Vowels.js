let inputString="Hello world"
function vowels(inputString){
    let vowels='aeiouAEIOU';
    let sVowels='';
    let rVowels='';
    for(let char of inputString){
        if(vowels.includes(char)){
            sVowels += char;
        }
        else{
            rVowels +=char;
        }
    }
   console.log('Vowels from given String:',sVowels);
   console.log('Remining Char from given String::',rVowels);
   return sVowels;
}
vowels(inputString);
