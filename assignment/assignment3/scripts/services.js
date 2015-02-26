angular.module('basic.services', [])
.factory('Test', function() {
	return 'A test factory';
})
.factory('Foo', function() {
	return ['a', 'test', 'factory'];
})
.factory('Bar', function() {
	return {
		prop1: 'a',
		prop2: 'test',
		prop3: 'factory'
	};
})
.factory('RandomNumber', function() {
	return function(min, max, forceInt) {
		if(typeof min !== 'number' || isNaN(min))
			throw 'min must be a number';
		if(typeof max !== 'number' || isNaN(max))
			throw 'max must be a number';

		var rand = Math.random();
		var range = (max - min);
		var num = rand*range + min;

		if(forceInt) {
			num = Math.floor(num);
		}
		return num;
	};
})
//Create a function that takes an array of values and returns one randomly selected value from that array.
.factory('RandomElement', function(RandomNumber) {
    return function(arr){
        if(arr ==  undefined){
            throw "You must enter an array for first argument";
        }
        // Checks if arr is an instance of Array
        if(!(arr instanceof Array)){
            throw "The first argument is not an array";
        }

        var arrLen = arr.length;
        var randPos = RandomNumber(arrLen, 0, true);
        // check upper bound
        if(randPos == arrLen){
            randPos--;
        }
        return arr[randPos];
    };
})
//Create a function that takes an unencrypted string and returns the ROT-13 version of that string. This is slightly different but similar to the example we did in class.
.factory('RotThirteen', function(upperEncrypt,lowerEncrypt) {
    return function(text){
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

})
//Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.
.factory('upperEncrypt', function() {
    return function(asciiValue){
        var reset = 65;
        var upperHigh = 90;
        console.log("Upper AsciiValue Before +13 :" + asciiValue);
        asciiValue += 13;								// adds 13 to ascii
        console.log("Upper AsciiValue after +13: " + asciiValue)

        if(asciiValue >= upperHigh)
        {
            reset += asciiValue - upperHigh;
            asciiValue = reset;							// give circular ascii value

            console.log("Upper AsciiValue after reset: " + asciiValue);
            return asciiValue;
        }
        else{
            return asciiValue;
        }
    }
})
//Create a function that takes an unencrypted string and an integer (n) and returns the ROT-N version of that string.
.factory('lowerEncrypt', function() {
    return function(asciiValue){
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
})
//Create a javascript function that takes an array of student names and returns an array of randomly selected pairs of students (array of arrays).
.factory('StudentPairs', function(RandomNumber) {
    return function(studArray){
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
            var studIndex = RandomNumber(0,studArray.length, true);
            var stud1 = studArray.splice(studIndex,1);
            pairs.push(stud1[0]);

            studIndex = RandomNumber(0, studArray.length, true);
            var stud2 = studArray.splice(studIndex,1);
            pairs.push(stud2[0]);
            result.push(pairs);
        }while(studArray.length > 0);
        return result; 
    }
})
//Create a function that takes a string and returns a string with a dash (-) in between each character using .split and .join.
.factory('StringDashes', function() {
    return function(text){
    	var newText = text.split("").join("-");
        console.log("Dashes: " + newText);
        return newText;   
    }
})
//Create a function that takes a string and returns a string with a dash (-) in between each character without using .split or .join.
.factory('DashesNoSplitJoin', function() {
    return function(argument, tell){
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

})
//Create a function that takes two string strings and returns a string with a dash (-) in between each character without using .split or .join.
.factory('Bar', function() {
    return function(){
        
    }
})
//Use $('selector').val() and $('selector').click() to re-create your number guessing game without using window.prompt. Use Bootstrap to build the page.
.factory('Bar', function() {

})
//Use $('selector').val() and $('selector').click() to re-create your slot machine without using window.prompt. Use Bootstrap to build the page.
.factory('Bar', function() {

});


//.factory('GeneratePassword', function(RandomNumber) {
//	return function(length) {
//		var password = '';
//		var charCode;
//
//		for(var i=0; i<length; i++) {
//			charCode = RandomNumber(32, 126, true);
//			password += String.fromCharCode(charCode);
//		}
//		return password;
//	};
//})
//.factory('User', function(GeneratePassword) {
//	return function() {
//		this.username = '';
//		this.password = GeneratePassword(16);
//		this.greeting = function() {
//			return 'Hello, ' + username;
//		};
//
//		this.checkPassword = function(guess) {
//			return guess === this.password;
//		}
//	};
//})

