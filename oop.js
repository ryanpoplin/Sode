// A REFRESHER FOR OOP IN JAVASCRIPT, CUZ IT'S SO DIFFERENT FROM SWIFT! =) 
// REF: PRO JAVASCRIPT DEVELOPMENT BOOK, GET IT ON AMAZON, IT'S BALLER!

// var house = {
// 	rooms: 7,
// 	sharedEntrance: false,
// 	lock: function() {},
// 	unlock: function() {}
// };

// // read out the values of the two properties...
// console.log(house.rooms);
// console.log(house.sharedEntrance);

// // execute the lock method of the object...
// house.lock();

// // update the value of the rooms property...
// house.rooms = 8;

// // add a completely new property dynamically...
// house.floors = 2;

// // read out the rooms property again - notice how it changed...
// console.log(house.rooms);

// var apartment = {
// 	floors: 1,
// 	rooms: 4,
// 	sharedEntrance: true,
// 	lock: function() {},
// 	unlock: function() {}
// };

// Since JavaScript is not like classical languages, Classes are replaced with Constructors...
// function Accommodation() {}
// var house = new Accommodation();
// var apartment = new Accommodation();

// house.constructor === Accommodation;
// apartment.constructor === Accommodation;

// house instanceof Accommodation;
// apartment instanceof Accommodation;

// var apartment = new house.constructor();

// a function is a special object in JavaScript, like an object literal; it's got a prototype...

// define a constructor called Accommodation
// function Accommodation() {}
// // assign props. to our 'class' blueprint
// Accommodation.prototype.floors = 0;
// Accommodation.prototype.rooms = 0;
// Accommodation.prototype.sharedEntrance = false;
// // assign methods to out class blueprint...
// Accommodation.prototype.lock = function() {};
// Accommodation.prototype.unlock = function() {};
// // create object instances from our Accommodation class...
// var house = new Accommodation();
// var apartment = new Accommodation();
// console.log(house.floors);
// console.log(apartment.rooms);
// // set the values for the instances...
// house.floors = 2;
// apartment.floors = 1;
// house.unlock();
// apartment.lock();
// the prototype is just an object...
// it's a prop. that sits in the function object...
// define our constructor...
// function Accommodation() {}
// // assign props. and meths. via an object literal...
// Accommodation.prototype = {
// 	floors: 0,
// 	rooms: 0,
// 	sharedEntrance: false,
// 	lock: function() {},
// 	unlock: function() {}
// };
// create instances...
// var house = new Accommodation();
// var apartment = new Accommodation();
// console.log(house.floors);
// console.log(apartment.rooms);
// house.floors = 2;
// apartment.rooms = 2;
// house.unlock();
// apartment.lock();

// Accommodation.prototype.alarm = function() {};

// // house and apartment now automatically have a new method 'alarm...'

// house.alarm();
// apartment.alarm();

// variables declared outside of any function are in the global namespace/scope...

// var myLibrary = {
// 	myName: "Byrdann"
// };

// // innerVariable = 26; // error...

// function doSomething() {
// 	// variables declared within a function are not accessible from outside of that function...
// 	var innerVariable = 25;
// 	myLibrary.myName = "Byrdann Fox";
// 	function doSomethingElse() {
// 		// variables declared in a surrounding scope are accessible...
// 		innerVariable = 26;
// 	}
// 	doSomethingElse();
// 	console.log(myLibrary.myName);
// 	console.log(innerVariable);
// }
// doSomething();

// this === the context of a function...

// outside of any function 'this' refers to the window object (in the browser only), not Node.js...
// var home = {
// 	isLocked: false,
// 	lock: function() {
// 		console.log(this === home);
// 		this.isLocked = true;
// 	}
// };
// home.lock();
// console.log(home.isLocked);

var apartment = {
	isLocked: false,
	lock: function() {
		// nested functions within an object take on the global window object rather than the surrounding scope...
		// 'this' refers to apartment object...
		var that = this;
		// set the isLocked prop.
		this.isLocked = true;
	}
};

