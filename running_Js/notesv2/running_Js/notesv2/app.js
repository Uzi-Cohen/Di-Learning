// // uzi-cohen JavaScript notes.
// // NOTE: MOST EXAMPLES ARE CONSOLE.LOGS DONE IN DEV.TOOLS ON CHROME/FIREFOX.
// // Note: these notes are based on colt steel's web developer bootcamp on udemy.
// //
// //
// // let random = Math.random();
// // if (random < 0.5) {
// //   console.log('math is gut')
// // }
// // console.log('this is cool')
// //
// //
// //
// // const dayOfWeek = prompt('Enter a day').toLocaleLowerCase();
// // if (dayOfWeek === 'monday') {
// //   console.log("UGH I HATE MONDAYS!!!")
// // } else if (dayOfWeek === 'saturday') {
// //   console.log("i love saturdays")
// // } else if (dayOfWeek === 'friday') {
// //   console.log("big up free day")
// // } else {
// //   console.log("meh")
// // }
// //
// // const age = prompt('Age')
// //
// // if (age < 5) {
// //   console.log("childrens price")
// // }
// // else if (age < 10) {
// //   console.log("get in!")
// // }
// // else if (age < 65) {
// //   console.log("U pay !")
// // }
// // else{
// //   console.log("for your own safety, dont ride anything please 0.0")
// // }
// //
// // function getColor(phrase) {
// //   if (phrase === 'stop'){
// //     console.log('red')
// //   }
// //   else if (phrase === 'slow'){
// //     console.log('yellow')
// //   }
// // else if (phrase === 'go'){
// //     console.log('green')
// //   }
// //   else {
// //     console.log('purple')
// //   }
// // }
// //
// // const password = prompt('please enter a password');
// // if (password.length >=6) {
// //   if (password.indexOf( ' ') === -1){
// //   console.log('nice')
// //   }
// //   else {
// //     console.log('no spaces wtf')
// //   }
// //
// //   console.log('long enough.')
// // }
// // else {
// //   console.log('too short must be atleast 6 characters')
// // }
// // if (password.indexOf( ' ') === -1){
// // console.log('nice')
// // }
// // else {
// //   console.log('no spaces wtf')
// // }
// //
// // const userInput = prompt('enter stoof');
// //
// // if (userInput) {
// //   console.log('truthy')
// // }
// // else (userInput)
// //   console.log('falsey')
// //
// //
// //
// //
// //
// //
// //
// // if (0) {
// //   console.log('truthy')
// // }
// // else {
// //   console.log('falsey')
// // }
// //
// // const password = prompt('please enter a password');
// // if (password.length >= 6 && password.indexOf(' ') === -1){
// //   console.log('good password') }
// //   else {
// //     console.log('bad password :/')
// //   }
// //
// //
// //
// //
// // logicalal or lesson #171
// //
// //
// // const age =prompt('age?');
// // if(age >= 0 && age < 5 || age >= 65) {
// //   console.log('free')
// // }
// // else if (age >= 5 && age < 10) {
// //   console.log('$10')
// // }
// // else if (age >= 10 && age < 65) {
// //   console.log('$20')
// // }
// // else {
// //   console.log('invalid age')
// // }
// //
// //
// //
// // logical NOT lesson #172
// //
// // !=not there
// //
// // const firstName = prompt('name')
// // if (!fistName) {
// //   firstName = prompt('GIVE ME YOUR NAME!')
// // }
// //
// // const age = 45;
// // if (!(age >= 0 && age <5 || age >=65)) {
// //   console.log('you are not a child or a senior')
// // }
// //
// //
// //
// //
// // the switch statement lesson #173
// // const day = 6;
// // if (day === 1) {
// //   console.log('SUNDAY')
// // }
// //
// // else if (day === 2) {
// //   console.log('Monday')
// // }
// // else if (day === 3) {
// //   console.log('Tuesday')
// // }else if (day === 4) {
// //   console.log('Wedsnday')
// // }else if (day === 5) {
// //   console.log('Thursday')
// // }else if (day === 6) {
// //   console.log('Friday')
// // }
// // else if (day ===7) {
// //   console.log('Saturday')
// // }
// // else {
// //   console.log('not a day.')
// // }
// // switch (day) {
// //   case 1:
// //   console.log ('yes');
// //   break;
// //   case 2:
// //   console.log('yus');
// //   break;
// //   case 3:
// //   console.log('yeet');
// //   break;
// //   case 4:
// //   console.log('watup');
// //   break;
// //   case 5:
// //   console.log ('cool');
// //   case 6:
// //   case 7:
// //   console.log('works')
// //   break;
// //   default:
// //   console.log('idk what that is')
// // }
// //
// //
// // new chapter Arrays
// // // lesson #175
// // let days = ['Monday' , 'Tuesday' , 'Wedsnday']
// //
// // let students = ['shitass' , 'dream' , 'sapnap']
// //
// // //lesson #176
// // let colors = ['rad' , 'blue' , 'green']
// // // colors [0] = 'red' fixes it.
// // // colors [11] = 'yellow'
// // // "yellow"
// // // colors
// // // (12) ["red", "blue", "green", empty × 8, "yellow"]
// // // colors.length
// // // 12
// //
// // push and pop lesson #177
// // let movieLine = ['tom' , 'joe']
// // ''movieLine.push()'' adds one to the end
// // ex movieLine.push('oliver') adds oliver as indexOf 3
// //
// // movieLine.pop() removes the last array
// // ex movieLine.pop()
// // movieLine
// // (2) ["tom", "joe"]
// // we removed oliver
// //
// //
// //
// // lesson #178 shift and unshift
// // let movieLine = ['tom' , 'joe']
// // shift() removes the first Array
// // ex movieLine.shift() removes 'tom' becomes movieLine = ['joe']
// //
// // unshift() adds another element to the begining.
// // ex movieLine.unshift('sir') adds sir to the beginning
// // becomes movieLine = ['sir' , 'tom' , 'joe']
// //
// //
// //
// // lesson #179 concats
// //
// // let cats = ['blue' , 'kitty']
// // let dogs = ['kinder', 'stinko']
// //
// // .concat()combines both Arrays without modification
// // ex cats.concat(dogs) = ['blue' , 'kitty' , 'kinder' , 'stinko']
// //
// // .includes() says weather or not an array includes an index.
// // ex cats.includes(kitty) true
// //
// // .reverse() reverses an Array. it is destructive to thhe original Array
// //
// //
// // lesson #180 slice and splice and sort
// // let colors = ['red', 'blue', 'green', 'yellow']
// //
// // .slice() removes all indexes up to the selected number.
// // ex colors.slice(1) removes 'red' from our Array keeps the rest.
// //
// //
// // .splice() does alot. it changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// // ex colors.splice(1,1)
// // ["blue"]
// // colors
// // (3) ["red", "green", "yellow"]
// // colors.reverse()
// // (3) ["yellow", "green", "red"]
// // colors.splice(1,0,'blue')
// // []
// // colors
// // (4) ["yellow", "blue", "green", "red"]
// // colors.splice(0,0,'black')
// // []
// // colors
// // (5) ["black", "yellow", "blue", "green", "red"]
// //
// // let scores = ['15' , '11' , '0', '6', '49', '-11']
// // .sort sorts numbers from lowest to highest first digit
// // ex  scores.sort()
// // (6) ["-11", "0", "11", "15", "49", "6"]
// //
// //
// // lesson #181 refference types and equality testing.
// // no notes, watch the lesson.
// // lesson #182
// // also watch the lesson, nothing new learnt. important notes given by colt.
// //
// // lesson #183 multi dimentional Arrays or nested Arrays.
// // const board = [
// //   ['X' , 'O' , null], ['O', null , 'X'], [null , 'X', 'O']
// // ]
// // to grab the first 'null' we chain
// // //ex board[1]  ["O", null, "X"]
// // board [1] [1]
// // null
// //
// //
// //
// // lesson #185 objects
// // objects can be used to store large bits of data
// // ex
// // const fitBitData = {
// //   totalSteps : 2000,
// //   totalMiles : 200,
// //   avgCalorieBurn : 50,
// //   workoutsThisWeek : '6 of 7',
// //   avgGoodSleep : '2:13'
// // }
// // note numbers do not scale.
// // a property is a key and a value.
// // lesson
// // lesson #186 ties into #185 watch the lesson.
// //
// //
// //
// // coding excersise solution
// // let product = {
// //     name : 'Gummy Bears',
// //     inStock : true,
// //     price: 1.99,
// //     flavors: ['grape', 'apple', 'cherry'],
// // }
// //
// // lesson #187 acessing data.
// // const fitBitData = {
// //   totalSteps : 2000,
// //   totalMiles : 200,
// //   avgCalorieBurn : 50,
// //   workoutsThisWeek : '6 of 7',
// //   avgGoodSleep : '2:13'
// // }
// // to accsess data
// // ex fitBitData["avgCalorieBurn"], gives us 50.
// // every key is converted to a string in the background.
// // create a variable, he didnt explain it. 🤦
// //
// //
// // coding excersise solution
// // const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
// //
// // less0n #188 modifying objects
// // const midterms = {danielle: 90, thomas: 78}
// // to change properties ex: midterms.danielle = 99
// // or midterms['danielle'] = 'A'
// //
// // lesson #189 nesting Arrays & objects.
// // const comments = [
// // {name: 'Ezz', text: 'this sucks', upvotes: '84736298'}
// // ]
// //
// // lesson #191 Loops.
// // for (let i = 1; i<=10; i++){
// //   console.log(i);
// // }
// // this prints from 1-10
// //
// // lesson #192 more for loops.
// // for (let i = 2; i<=20; i += 2){
// //   console.log(i);
// // }
// // //to get only even numbers
// //
// // for (let i = 1; i<=20; i += 1){
// //   console.log(i);
// // }
// // for odd numbers
// //
// // code excersise solution
// // for (let i=25; i>=0 ; i-=5){
// //     console.log(i)
// // }
// //
// // lesson #194 looping over Arrays
// // const cars = ['merc', 'bmw', 'audi'];
// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i].toUpperCase());
// // }
// //
// //
// // lesson nested loops #195
// //  for (let i =1; i <= 10; i++) {
// //    console.log(`i is: ${i}`)
// //    for (let j =1; j < 4; j++) {
// //      console.log(`      j is: ${j}`)
// //    }
// //  }
// // const chart = [
// //   ['adam','ezz','fayad'],
// //   ['cool','dat boi','some cool guy'],
// //   ['yossi','james','samir',],
// // ]
// // for (let i = 0; i < chart.length; i++ ) {
// //   const row = chart[i];
// //   for (let j = 0; j<row.length; j++) {
// //     console.log(row[j])
// //   }
// // }
// //
// //
// // lesson #196 while loops
// // let num = 0;
// // while (num < 10) {
// //   console.log(num)
// //   num++
// // }
// // const CODE = 'bigStink';
// // let guess = prompt('password')
// // while (guess !== CODE) {
// //   guess = prompt('password');
// // }
// // console.log('well done!')
// // this will keep looping until you use the real code.
// //
// // lesson #197 the break keyword.
// // let input = prompt('yo say smth')
// // while (true) {
// //   input = prompt(input);
// //   if (inupt == 'stop wtf')
// //     break;
// //
// // }
// // console.log('ok fine whatever')
// //
// // lesson #198 guessing game
// // let maximum = parseInt(prompt("max number"));
// // const targetNum = math.floor(math.random() * maximum) +1;
// // console.log(targetNum)
// //
// //
// // functions #205
// // function ffs() {
// //   console.log('what');
// //   console.log('do');
// //   console.log('you want?');
// // }
// // ffs()
// // ffs()
// // ffs()
// // ffs()
// // ffs()
// // ffs()
//
//
// // code excersise solution
// // function printHeart() {
// //     console.log('<3')
// // }
// // printHeart()
//
// //lesson #206 arguments
// // function greet(firstName, lastName){
// //   // console.log(`firstName is: ${firstName}`)
// //   console.log(`Hello, ${firstName} ${lastName[0]}!`)
// // }
// // greet('George', 'Clooney')
//
// lesson #207 multiple arguments.
// ah
// //this is super imprtant.
//
//
//
// //lesson function scope.
//
// let totalEggs = 0;
//  function collectEggs() {
//    let totalEggs = 6;
//  }
//  collectEggs();
//  console.log(totalEggs);
//
// let bird = 'scarlet';
// function birdWatch(){
//   // let bird = 'flamingo';
//   console.log(bird)
// }
// // console.log(bird)
//refferencing variables.
///////////////////////////////////

//block scope
// let radius = 8;
// if ( radius >0) {
//   const PI = 3.14;
//   let msg= 'yo'
// }
// console.log(PI)

// for (let i=0; i<5; i++) {
//   let msg ='stuff'
//   console.log(msg)
// }
// console.log(msg)
// console.log(i)


//lesson lexical scope
// function bank(){
//   const banker = ['john', 'adam', 'joey', 'annah']
//   function cry(){
//     function inner() {}
//     for (let banker of bankers) {
// console.log('help pls')
//     }
// inner();
//   }
//   cry();
// }


//functions expressions
// function add (x, y) {
//   return x+y
// }

// const add = function(x, y) {
//   return x + y;
// }
//we can store in and pass around functions


//code excersise #44
// function square1 (x, y) {
//   return Math.pow(4, 2)
// }
// console.log(square1(4))
//
// function square(x,y) {
//   return Math.pow(3, 2)
// }
// console.log(square())

//lesson higher order functions
// function callTwice(fun){
// fun();
// fun();
// }
// function rollDie(){
//   const roll = Math.floor(Math.random() * 6)
//   console.log(roll)
// }
// callTwice(rollDie)

//lesson higher order functions
// function makeMysteryFunc() {
// const rand = Math.random();
// if (rand<5){
//   return function(){
//     console.log('cool')
//     console.log('u win stuff')
//   }
// }else {
//   return function() {
//     alert('u lost')
//     alert('u just suck bro')
//   }
// }
// }
// function makeBetweenFunc(min, max) {
//
// }
// makeBetweenFunc(50,100 )=>
//
// function btwnFunc(min, max){
// return function(num)
//   return num >= min && num <= max;
// }

// lesson methods
// 'hello'.toUpperCase() is a string method
// const math = {
//   PI: 3.14,
//   square: function(num){
//     return num*num;
//   },
//   cube: function(num) {
//     return num ** 3;
//   }
// }

// //code excersise solution
// const square = {
//     area: function(num){
//         return num*num;
//     },
//     perimeter: function(num){
//         return num*4
//     }
// }

// the dreaded 'this' keyword
// const name = {
//   first: 'Uzi',
//   Last: 'Cohen',
//   fullName() {
//     console.log( `${this.first} ${this.last}`);
//   }
// }
// try{
//   uzi.toUpperCase();
// } catch{
//   console.log("UZI")
// }
//try/catch
// function yell(msg) {
//   console.log(msg.toLocaleUpperCase())
// }

// every and some
//they are bolean methods, always return true or false
//excersise solution
// function allEvens(arrNums) {
//   return arrNums.every(num=> num % 2 === 0)
// }

//THE DOM document object model.
//to select an id.
// const banner = document.getElementById('#banner')
// console.dir(banner)

//get elements by tagname
// document.getElementsByTagName('img')
// const allImages = document.getElementsByTagName('img')
// console.dir(allImages[0])
// for (let img of allImages) {
//   console.log(img.src) {
//     img.src = "link"
//   }
// }
//this is how we select tags.
//elements in JavaScript
//get elements by classname
//same idea but classes.
//ex getElementByClassName('square')
// we can change the image sources here as well same idea.

//querySelectors
//document.querySelector('p') selects first match.
//to select an id document.querySelector('#banner')
//to select a class document.querySelector('.class')
//to select a certain thing
//document.querySelector('a[title='JavaScript']')
//document.querySelectorAll('p') returns all matches.
//select all paragraphs in anchors
//const links = document.querySelectorAll('p a');
// for (let link of links) {
//console.log(link.href)
// }
// to select the links.
//const checkbox = document.querySelector("input[type='checkbox']") for attribute selecting

//properties & methods


//inner html
// document.querySelector('p').innerHTML picks the html tags of element
// document.querySelector('h1').innerText to change the innerText
// document.querySelector('p').textContent

//attributes
//document.querySelector('#banner').id to change the attributes of an id
//const firstLink = document.querySelector('a')
// const input = document.querySelector('input[type='text']')
//input.type
//document.querySelector('#banner').src = smth else to change the links

//changing styles
//const h1 = document.querySelector('h1');
//h1.style.color = 'green' to change color of
//h1.style.border = '2px solid black' to change border.
//window.getComputedStyle(h1) to get all style declaration.
//window.getComputedStyle(h1).fontFamily select certain attributes

//selecting multiple elements
// const span =document.querySelectorAll('span');
//
// for(let i=0;i<span.length;i++){
//
//     span[i].style.color=colors[i];
// }

//classlist
//h2.setAttribute('class', 'purple')
//to add classes
//h2.classList.add('purple') adds color purple as a class
//h2.classList.toggle ('purple') adds and removes it

//appending
// const newImg = document.createElement('img')
// document.body.appendChild(newImg) to inupt img
//const newB = document.createElement('b')
//newB.append('hi') adds to end// newB.prepend('yeth') adds it to the begining
//


//removing elements, .remove .removeChild
//const firstLi = document.querySelector('li')
// const ul = firstLi.parentElement
// ul.removeChild(firstLi) removing li element.
//or just use .remove() after selecting query.
//img.remove() as an example
 //300 lessons to go!!


//inline events
//adding an attribute called 'on click'
//ex    <button onclick="alert('what was that for?')"type="button" name="button"></button>
//'ondblclick' is for double click
//to pring use onclick=('console.log('ex)')')

//the onclick property
// const btn = document.querySelector('#v2')
// // btn.onclick = function(){
// //   console.log('works')
// //   console.log('yea it does')
// // }
// function scream (){
//   console.log('ahhhhhh')
// }
// btn.onmouseeneter = scream;
//this does not work in the dev tools for some reason :/

//addEventListener
// const button = document.querySelector('h1');
// button.addEventListener('click', ()=> {
//   alert('clicked')
// })
// again doesnt work in dev tools :(
// function twist() {
//   console.log('twist')
// }
// function shout() {
//   console.log('yes')
// }
// // const tasButton = document.querySelector('#tas')
// tasButton.onclick = shout;
// //we cant have 2 different callback functions for the same event.
// tasButton.addEventListener('click', twist {once : true})
//use addEventListener it is better

// solution
// let helloButton = document.querySelector("#hello");
// let goodbyeButton = document.querySelector("#goodbye");
//
// helloButton.addEventListener('click', () => {
//     console.log("hello");
// });
//
// goodbyeButton.addEventListener('click', () => {
//     console.log("goodbye");
// });

//random color changer
// const button = document.querySelector('button');
// button.addEventListener('click', function(){
//   document.body.style.backgroundColor = 'olive';
// })


//the keyboard events.
