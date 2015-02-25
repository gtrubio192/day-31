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
.factory('Bar', function() {

})
//Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.
.factory('Bar', function() {

})
//Create a function that takes an unencrypted string and an integer (n) and returns the ROT-N version of that string.
.factory('Bar', function() {

})
//Create a javascript function that takes an array of student names and returns an array of randomly selected pairs of students (array of arrays).
.factory('Bar', function() {

})
//Create a function that takes a string and returns a string with a dash (-) in between each character using .split and .join.
.factory('Bar', function() {

})
//Create a function that takes a string and returns a string with a dash (-) in between each character without using .split or .join.
.factory('Bar', function() {

})
//Create a function that takes two string strings and returns a string with a dash (-) in between each character without using .split or .join.
.factory('Bar', function() {

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

