// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	cardNumber = cardNumber.split('').map( i=> Number(i) )
	// console.log(cardNumber)

	let dinerStart =   cardNumber.slice(0,2).join('') == '38' || cardNumber.slice(0,2).join('') == '39'  
	let dinerDigit = (cardNumber.length==14)  
	let americanStart = (cardNumber.slice(0,2).join('') == '34' || cardNumber.slice(0,2).join('') == '37')
	let americanDigit = (cardNumber.length==15)

	let visaStart = (cardNumber.slice(0,1).join('') == '4')
	let visaDigit = (cardNumber.length==13 || cardNumber.length==16 ) || cardNumber.length==19  

	let masterStart =  Number(cardNumber.slice(0,2).join('')) >=51 &&  Number(cardNumber.slice(0,2).join('')) <=55
	let masterDigit = (cardNumber.length==16)

	let discoverStart =  ( Number(cardNumber.slice(0,4).join('')) ==6011 
		|| ( Number(cardNumber.slice(0,3).join('')) <=649 && Number(cardNumber.slice(0,3).join('')) >=644 ) ) 
		|| Number(cardNumber.slice(0,2).join('')) ==65 
	let discoverDigit = cardNumber.length==16 || cardNumber.length==19


	let maestroStart =  (( Number(cardNumber.slice(0,4).join(''))==5018 
		||  Number(cardNumber.slice(0,4).join('')) ==5020 ) 
		||  Number(cardNumber.slice(0,4).join('')) ==5038 )    
		|| Number(cardNumber.slice(0,4).join('')) ==6304 
	let maestroDigit = cardNumber.length<=19 || cardNumber.length>=12


	let chinaStart =  (( Number(cardNumber.slice(0,3).join('')) <=626 && Number(cardNumber.slice(0,3).join('')) >=624 ) 
		|| ( Number(cardNumber.slice(0,6).join('')) <=622925 && Number(cardNumber.slice(0,6).join('')) >=622126 ) ) 
		|| ( Number(cardNumber.slice(0,4).join('')) <=6288 && Number(cardNumber.slice(0,4).join('')) >=6282 ) 
	let chinaDigit = cardNumber.length<=19 && cardNumber.length>=16


	let sprefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759] ;
	let switchStart;
	if (sprefix.filter(i =>  Number(cardNumber.slice(0,i.toString().length).join(''))==i ).length===0){
		switchStart=false;
	}else{
		switchStart=true;
	}
	let switchDigit = ( cardNumber.length==18 || cardNumber.length==16 ) || cardNumber.length==19




	if (dinerStart && dinerDigit){
		return 'Diner\'s Club'
	}else if( americanStart && americanDigit){
		return 'American Express'
	}else if (switchStart&&switchDigit ){
		return 'Switch'
	}else if( visaStart&&visaDigit ) {
		return 'Visa'
	}else if (masterStart&&masterDigit ){
		return 'MasterCard'
	}else if (discoverStart&&discoverDigit ){
		return 'Discover'
	}else if (maestroStart&&maestroDigit ){   
		return 'Maestro'
	}else if (chinaStart&&chinaDigit ){  // put China in front of visa. so it gets matched earlier 
		return 'China UnionPay'
	}else{
    return -1
  }

};


