function randomGen(max, min)
{
	if(typeof min == undefined)
	{
		min = 0;
	}
	return (Math.floor(Math.random() * (max-min)+min)).toString();
}
// #1
function randElement(arr){
	if(arr ==  undefined){
		throw "You must enter an array for first argument";
	}
	// Checks if arr is an instance of Array
	if(!(arr instanceof Array)){
		throw "The first argument is not an array";
	}

	var arrLen = arr.length;
	var randPos = randomGen(arrLen, 0);
	// check upper bound
	if(randPos == arrLen){
		randPos--;
	}

	return arr[randPos];
}

// #2
// Encrypt incoming string
function rot13Unencrypted(text)
{
	var asciiValue = 0; 
	// var rot13 = 26;
	var upperAscii = '';
	var lowerAscii = '';

	var unencryptedName = text;

	var encryptedName = '';
	// asciiValue = unencryptedName.charCodeAt(0);		// returns ascii # @ position
	// console.log("Before loop: " + asciiValue); 

	for(var i=0; i<unencryptedName.length; i++) {
		asciiValue = unencryptedName.charCodeAt(i);		// returns ascii # @ position
		// check to see if upper case
		if(asciiValue >= 65 && asciiValue <= 90)
		{
			console.log("Upper before sending off: " + asciiValue + " " + text[i]); 

			upperAscii = upperEncrypt(asciiValue);    
			encryptedName = encryptedName + String.fromCharCode(upperAscii);
		}
		// or lower case
		else if(asciiValue >=97 && asciiValue <=122)
		{
			console.log("Lower before sending off: " + asciiValue + " " + text[i]); 

			lowerAscii = lowerEncrypt(asciiValue);
			encryptedName = encryptedName + String.fromCharCode(lowerAscii);
		}
		else
		{
			throw "Invalid special character: " + unencryptedName[i];
		}
	}
	return encryptedName;
}
function upperEncrypt(asciiValue)
{
	// reset starts at A == 65
	var reset = 65;
	var upperHigh = 90;

	console.log("Upper AsciiValue Before +13 :" + asciiValue);
	asciiValue += 13;								// adds 13 to ascii
	console.log("Upper AsciiValue after +13: " + asciiValue)

	if(asciiValue >= upperHigh)
	{
		reset += asciiValue - upperHigh;
		// asciiValue = unencryptedName.charCodeAt(i);
		asciiValue = reset;							// give circular ascii value

		console.log("Upper AsciiValue after reset: " + asciiValue);

		return asciiValue;
		// encryptedName = encryptedName + String.fromCharCode(asciiValue);
	}
	else{

		// asciiValue = unencryptedName.charCodeAt(i);
		// asciiValue += 13;
		// encryptedName = encryptedName + String.fromCharCode(asciiValue);
		return asciiValue;
	}

	// console.log(encryptedName);
	// return encryptedName;

}
function lowerEncrypt(asciiValue)
{
	// reset starts at a == 97
	var reset = 97;
	var lowerHigh = 122;

	console.log("Lower AsciiValue Before +13 :" + asciiValue);
	asciiValue += 13;								// adds 13 to ascii
	console.log("Lower AsciiValue after +13: " + asciiValue)

	if(asciiValue > lowerHigh)
	{
		reset += asciiValue - lowerHigh;
		asciiValue = reset;
		console.log("Returning Lower AsciiValue and reset: " + asciiValue)

		return asciiValue;
	}
	else
	{
		console.log("Returning Lower AsciiValue: " + asciiValue)
		return asciiValue;
	}
}

// #3
function rot13Encrypted(text)
{
	var asciiValue = 0; 
	var reset = 0;
	var rot13 = 26;

	var unencryptedName = text;

	var encryptedName = '';

	for(var i=0; i<unencryptedName.length; i++) {
		// check to see if ascii val > 26
		asciiValue = unencryptedName.charCodeAt(i);		// returns ascii # @ position
		asciiValue -= 13;								// adds 13 to ascii
		if(asciiValue < 0)
		{
			reset = rot13 + asciiValue;
			// asciiValue = unencryptedName.charCodeAt(i);
			asciiValue = reset;							// give circular ascii value
			encryptedName = encryptedName + String.fromCharCode(asciiValue);
		}
		else{

			// asciiValue = unencryptedName.charCodeAt(i);
			// asciiValue -= 13;
			encryptedName = encryptedName + String.fromCharCode(asciiValue);
		}
	}
	console.log(encryptedName);
}

// #4
function rotN_Unencrypted (text, n) {
	var asciiValue = 0; 
	var reset = 0;
	var abc = n;		//abcd

	var unencryptedName = text;

	var encryptedName = '';
	if( abc < 0){
		abc = (26 - ((0-abc) % 26));
	}
	var rot = abc % 26;
	var out = '';

	console.log("Input: " + text);

	for(var i = 0; i < text.length; i++)
	{
		asciiValue = text.charCodeAt(i);		// get ascii value
		// check for upper case
		if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)
		{
			// check if we've passed upper limit
			if(text.charCodeAt(i) + rot <= 90)
			{	
				out += String.fromCharCode(text.charCodeAt(i) + rot);
				// console.log(out);
			}
			else {
	            out += String.fromCharCode(text.charCodeAt(i) + rot - 26);
				// console.log(out);
			}

		}
		// check for lower case
		else if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122){
			// check if we've passed upper limit
			if(text.charCodeAt(i) + rot <= 122){
				out += String.fromCharCode(text.charCodeAt(i) + rot);
			}
			else{
				out += String.fromCharCode(text.charCodeAt(i) - rot);
			}
		}
		// no special characters
		else{
			throw "Invalid special character: " + text[i];
		}
	}
	return out;
}


// #5
// Create a javascript function that takes an array of student names 
// and returns an array of randomly selected pairs of students (array of arrays).
function studentPairs(studArray)
{
	if(!(studArray instanceof Array)){
		throw "Not an array";
	}
	if(!studArray.length){
		throw "Array must be longer than 1";
	}
	if(studArray.length%2 !== 0){
		throw "Must have an even array"; 
	}

	var result = [];
	do{
		var pairs = [];
		var studIndex = randomGen(studArray.length, 0);
		var stud1 = studArray.splice(studIndex,1);
		pair.push(stud1[0]);

		studIndex = randomGen(studArray.length, 0);
		var stud2 = studArray.splice(studIndex,1);
		pair.push(stud2[0]);

		result.push(pair);


	}while(studArray.length > 0);

	return result; 
	// var len = studArray.length;
	// var stud1 = studArray[randomGen(len, 0)];
	// var stud2 = studArray[randomGen(len, 0)];
	// console.log("student array: " + stud1);
	// var pairs = [stud1, stud2];
}

// #6
// Create a function that takes a string and returns a string with a dash (-) in between each 
// character using .split and .join.
function stringDashes(text)
{
	var newText = text.split("").join("-");
	console.log("Dashes: " + newText);
	return newText;
}

// #7
// Create a function that takes a string and returns a string with a dash (-) in between each 
// character WITHOUT using .split or .join.
// tell is a special variable that works with concatDash() function
function dashesNoSplitJoin (argument, tell) {
	
	var newDash = '';
	var len = argument.length;
	for (var i =  0; i < len; i++) {
		if(i == len-1 && tell == undefined)
			newDash += argument[i] ;
		else
			newDash += argument[i] + '-';

	}
	console.log("In dashesNoSplitJoin() :" + newDash);
	return newDash;
}

// #8
// Create a function that takes two string strings and returns a string with a dash (-) in between 
// each character without using .split or .join.
function concatDash(str1, str2)
{
	var dashes = str1 + str2;
	dashes = dashesNoSplitJoin(dashes);

	return dashes;
}






