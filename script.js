

// Write your code here and print the output using alert function
function twoSum(input1,input2){

	let n1 = parseFloat(input1);
	let n2 = parseFloat(input2);
	 
	if(!isNaN(n1) && !isNaN(n2)) 
	{
		let totalSum = n1 + n2 ;
		let thenSum = " The sum of " + input1 + " and " + input2 + " is " + totalSum + ".";
		return thenSum;
	} 
	else 
	{  
		return "Invalid input. Please enter a valid number." ;
	}
}

let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
alert(twoSum(input1,input2)); 
