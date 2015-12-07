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

// var apartment = {
//  	isLocked: false,
// 	lock: function() {
// 		// 'nested functions' within an object take on the global window object rather than the surrounding scope...
// 		// 'this' refers to apartment object...
// 		var that = this;
// 		// set the isLocked prop.
// 		this.isLocked = true;
// 		function doSomething() {
// 			console.log(this === apartment);
// 			// in the browser...
// 			// console.log(this === window);
// 			console.log(this === global);
// 			console.log(that === apartment);
// 			that.isLocked = false;
// 			function anotherSomething() {
// 				console.log(this === global);
// 				console.log(that === apartment);
// 			}
// 			anotherSomething();
// 		}
// 		doSomething();
// 	}
// };
// apartment.lock();

// function Accommodation() {
// 	// 'this' refers to object instances created from this class...
// 	this.floors = 0;
// 	this.rooms = 0;
// 	this.sharedEntrance = false;
// 	this.isLocked = false;
// 	this.lock = function() {
// 		// this refers to the surrounding object, which in this case is the object instance created...
// 		this.isLocked = true;
// 	}
// 	this.unlock = function() {
// 		this.isLocked = false;
// 	}
// }

// var house = new Accommodation();
// var apartment = new Accommodation();

// // read, write, execute...
// console.log(house.floors);
// apartment.lock();

// combo of this and prototype...
// function Accommodation() {
// 	this.floors = 0;
// 	this.isLocked = true;
// }

// Accommodation.prototype.lock = function() {
// 	this.isLocked = true;
// };
// Accommodation.prototype.unlock = function() {
// 	this.isLocked = false;
// }
// Accommodation.prototype.context = function() {
// 	// how to test for 'this' here???
// 	console.log(this !== global);
// 	function context() {
// 		console.log(this === global);
// 	}
// 	context();
// }

// var home = new Accommodation();
// home.context();

// function Accommodation(floors, rooms, sharedEntrance) {
// 	// again, this here refers to the instance created from Accommodation...
// 	this.floors = floors || 0;
// 	this.rooms = rooms || 0;
// 	this.sharedEntrance = sharedEntrance || false;
// }

// // if a value does not need to be set at init, put it on the prototype...
// // this is a lot more efficient b/c you've only set this to the Accommodation's prototype object once! =)
// Accommodation.prototype.isLocked = true;
// Accommodation.prototype.lock = function() {
// 	this.isLocked = true;
// };
// Accommodation.prototype.unlock = function() {
// 	this.isLocked = false;
// };

// var house = Accommodation(3, 4, true);

// So yea, doing this sucks: Accommodation(2, 3, 4, 5, 6, 7, 8, 9, true, false, true, false);
// what's the better solution?

// function Accommodation(defaults) {
// 	defaults = defaults || {};
// 	this.floors = defaults.floors || 0;
// 	this.rooms = defaults.rooms || 0;
// 	this.sharedEntrance = defaults.sharedEntrance || false;	
// }
// // remember, for all methods in general, and for props. that don't need to have a specific value at initialization, add it to the prototype object!
// Accommodation.prototype.isLocked = true;
// Accommodation.prototype.isSecure = false;
// Accommodation.prototype.lock = function() {
// 	this.isLocked = true;
// 	// get ref. to this scope...
// 	var that = this;
// 	// keep the scope chain in mind!
// 	(function() {
// 		that.isSecure = true;
// 		// always remeber your scope ref!
// 		console.log(this === global);
// 	}());
// };
// Accommodation.prototype.unlock = function() {
// 	this.isLocked = false;
// };

// var apartment = new Accommodation({
// 	floors: 1,
// 	rooms: 2
// });

// console.log(apartment);
// // the prototype object is associated with the constructor, not the instance, and it's sort of globally referred to by all the instances of it...
// console.log(Accommodation.prototype);
// // for instance ref...
// console.log(apartment.__proto__);
// // the fuck is going on here???
// console.log(apartment.constuctor === Accommodation);
// apartment.lock();
// console.log(apartment.isSecure)
// // unlike classical languages, you do not have to include values for all the possible argument on init!
// // keep .__proto__ in mind also, (refer to greenville.js)!

// function Accommodation() {}
// Accommodation.prototype.isLocked = true;
// Accommodation.prototype.lock = function() {
// 	this.isLocked = true;
// 	console.log('lock');
// 	// return the context...
// 	// this is the object instance...
// 	return this;
// };
// Accommodation.prototype.unlock = function() {
// 	this.isLocked = false;
// 	console.log('unlock');
// 	return this;
// };
// Accommodation.prototype.alarm = function() {
// 	// make a beep noise to show data altering the system...
// 	console.log('Sound the damn alarm!');
// 	return this;
// };
// var house = new Accommodation();
// house.lock().alarm().unlock();
// returning the instance 'house' or 'whatever' you can chain methods together of that same instance instead of calling them individually...

// subclassing in JavaScript is done by using prototypal inheritance...
