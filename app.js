// // var language = 'Javascript';
// // var status = 'Awesome';
// // var ourThoughts = language + ' is ' + status;

// // console.log(ourThoughts);

// // // this code creates 3 variables, 2 strings variables with the third 
// // // variable combining the first 2. Then prints to js console the third variable 

// var greeting = 'Hello';
// greeting = greeting + ' World!';

// console.log('greeting:', greeting);

// // // created variable called greeting and stored the string 'Hello' in it
// // // 

// var capitalGreet = greeting.toUpperCase();
// var lowerCaseGreet = greeting.toLowerCase();

// console.log('capitalGreet:', capitalGreet);
// console.log('lowerCaseGreet:', lowerCaseGreet);

// var sentence = 'the quick brown fox jumped over the lazy dog';
// var words = sentence.split(' ');
// console.log(words);

// var firstName = 'Brendan';
// var lastName = 'Eich';

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);

// var fullName = `
// Full Name 

// ---

// First Name: ${firstName}
// Last Name: ${lastName}`;

// console.log(fullName);

// var price = 23.09;
// var tax = 0.07;
// var total = price * (1 + tax);

// console.log(total);

// var age = 11;
// age ++; 
// console.log(age);
// age --;
// console.log(age);

// var favoriteThings = ['dogs', 'nature', 'friends'];
// var firstThing = favoriteThings[0];
// var secondThing = favoriteThings[1];
// var thirdThing = favoriteThings[2];

// console.log(`I like ${firstThing}, ${secondThing}, and ${thirdThing}`);

// var willLearnJavaScript = true;
// willLearnJavaScript = !willLearnJavaScript;

// console.log(willLearnJavaScript);

// var areSame = 'Hello World!' === 'Hello World!'; 
// console.log('areSame:', areSame);

// var areSame1 = false == 0;
// console.log('false == 0:', areSame1);

// var areSame2 = false == '';
// console.log('false == "":', areSame2);

// var areSame3 = true == '1';
// console.log('true == "1":', areSame3);

// var areSame4 = null == undefined;
// console.log('null == undefined', areSame4);

// var shouldExecute = true;

// if (shouldExecute === true) {
// 	console.log('hazaaaa!!! this code ran!!');
// }

// var num = 9;

// if (num > 10) {
// 	console.log('num is more than 10!');
// } else if (num < 8) {
// 	console.log('num is less than 8!');
// } else {
// 	console.log('num is somewhere between 8 & 10');
// }

var num = 1; 

// BOTH conditions must be true 

if (num > 3 && num < 10) {
	console.log('the number is larger than 3 and smaller than 10');
}