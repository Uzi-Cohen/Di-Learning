daily challenge

// function Video(title, uploader, seconds) {
//     this.title = title;
//     this.uploader = uploader;
//     this.seconds = seconds;
// }
//
// Video.prototype.watch = function() {
//     console.log("You watched all " + this.seconds + " seconds of " + this.title);
// };
//
// var vid = new Video("interesing vid", "Uzi Cohen", 200);
// vid.watch();
//
//
// var vid2 = new Video("Football game", "sir alex", 700);
// vid2.watch
//
//
exercises #1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
//
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
//
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//#3
// const users = { user1: 18273, user2: 92833, user3: 90315 }
//
// const usersArray = Object.entries(users);
// console.log(usersArray); //array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// array = Object.entries(users);
// array.map(i => i[1] = i[1]*2)
// console.log(Object.fromEntries(array));
//#4
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const member = new Person('John');
// console.log(typeof member);
//'object' is the outcome


//#5
//this is the solution
// 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
//#6
//1. both are false
//2. 5
//3.
// class cow : Animal
// {
//     public cow(string cowName) : base(cowName)
//     {
//         this.Sound = "moo";
//     }
// }
