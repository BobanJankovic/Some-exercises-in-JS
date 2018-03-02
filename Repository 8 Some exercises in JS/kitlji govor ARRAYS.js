let input="dejan smrdi";
let vowels=["a","e","i","o","u"];
resultArray=[];



for (let inputIndex=0; inputIndex < input.length;inputIndex++ ) {
  
  for (let vowelsIndex=0; vowelsIndex < vowels.length;vowelsIndex++ ) 
  {
  	if (input[inputIndex]===vowels[vowelsIndex]){
    resultArray.push(input[inputIndex]); 
    } 
  }
  if (input[inputIndex]==="e") {
   resultArray.push(input[inputIndex]);    
   }
   if (input[inputIndex]==="i") {
   resultArray.push(input[inputIndex]);    
   }
}
console.log(resultArray.join('').toUpperCase());