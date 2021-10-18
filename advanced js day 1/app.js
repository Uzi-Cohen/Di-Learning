const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
var double = [];
gameInfo.forEach(person => double.push(person.username + "!"));

console.log(double);
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
//
// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }
//
// function q22() {
//     alert(a);
// }
//
//
// //#3
// function q3() {
//     window.a = "hello";
// }
//
//
// function q32() {
//     alert(a);
// }
//
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
//
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// the a will comee out as 5

// function winBattle(){
//     return true;
// }
//
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
//
// experiencePoints()
//
// var experiencePoints = 10;
// console.log((experiencePoints >= 10))? 'you win the battle!' : 'you lose!'
// #3
// var colors = ["red","orange","yellow","green","blue","violet"];
// for (const color of colors){
//     console.log(color)
//     }
//
// #4
// var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//
// function Ordinal(n)
//  {
//  var o = ["th","st","nd","rd"],
//  x = n%100;
//  return x+(o[(x-20)%10]||o[x]||o[0]);
//  }
//
// for(n = 0; n < color.length; n++){
//  var ordinal = n + 1;
//
//  var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");
//
// console.log(output);
// }

// #5
// if (typeof myVar === 'string' || myVar instanceof String)
// // it's a string
// else{
// // it's something else}
