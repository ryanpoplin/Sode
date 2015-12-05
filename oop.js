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

// define a constructor called Accommodation
function Accommodation() {}
// assign props. to our 'class' blueprint
Accommodation.prototype.floors = 0;
Accommodation.prototype.rooms = 0;
Accommodation.prototype.sharedEntrance = false;


