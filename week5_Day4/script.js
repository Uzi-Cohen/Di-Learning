//daily
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// Promise.all([promise1, promise2, promise3])
// .then(values => {
//   console.log(values)
// Promise.allSettled([promise1,promise2, promise3, promise4])
// .then(result => console.log(result))
// .catch(error => console.log(error));
//
//exercises
// Exercise 1: Conversion
// Instructions

// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);


// const getStarships = async () => {
// 	let response = await fetch("https://swapi.dev/api/starships/9/");
// 	let data = await response.json();
// 	console.log(data);
// }

// getStarships();

// Exercise 2: Analyze
// Instructions

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

//     Analyze the code provided above what will be the outcome?

// Outcome:
// calling
// (after 2 seconds:) resolved








