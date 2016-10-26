var value = 42;

if (value >= 53) {
	value += 42;
} else {
	value -= 13;
}

value += '11';

// create an array
var array = [];

//  loop through 'value' using charAt set array[i] to each value
for (var i = 0; i < value.length; i++) {
	array.push(value.charAt(i))
}
console.log(array);

// 5. Remove the first and last values off the array

array.pop();

array.shift();

//  store each value into the new Variable, combining each of the values of that array (backwards remember!)

var newVar = '';

for (i = array.length - 1; i >= 0; i--) {
	newVar += array[i];

}
console.log(newVar);

value = parseInt(value);
console.log(value)

newVar = parseInt(newVar);
console.log(newVar);

// 8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value += newVar;

// 9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27.
// If neither of these are true, set the value to 2.

if (value < 60) {
	value = 14;
} else if (value == 2930) {
	value = 27;
} else {
	value = 2;
}
console.log(value);

// 10. Create a while loop that counts down from 10 and increments 'value' by 1.

var x = 10
while (x > 0) {
	value = value + 1;
	x--;
}

console.log(value);
var string = '';
// // 11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there
// is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

function myFunction(val) {
	if (val.length > 1) {
		string = val.string();
		string.slice(0, 1);
		return string;
	}
}

myFunction(value);
console.log(value);
