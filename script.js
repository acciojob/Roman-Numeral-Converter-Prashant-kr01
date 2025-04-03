function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

}
    let result = "";
  
    // Handling special subtractive cases separately
    const subtractiveCases = {
        900: "CM",
        400: "CD",
        90: "XC",
        40: "XL",
        9: "IX",
        4: "IV"
    };

	for(let key in subtractiveCases){
		if(num >= key){
			result+= subtractiveCases[key];
			num -=key;
		}
	}
  for(let i in obj){
	  if(num >= object[i][0]){
		 result += object[i][0];
		  num -= object[i][1];
	  }
  }
return result;
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
