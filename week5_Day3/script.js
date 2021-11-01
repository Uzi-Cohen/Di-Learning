// daily
// const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
// const complicatedArray = ['cucumber', 44, true];

// const makeAllCaps = (array) => {
// 	return new Promise((resolve,reject) => {

// 		let newArray = array.map(item  => {
// 			if (typeof(item) !== "string") {
// 				reject("error");
// 			} else {
// 				return item.toUpperCase();
// 			}
// 		})
// 		resolve(newArray);
// 	})
// }

// const sortWords = (array) => {
// 	return new Promise((resolve,reject) => {
// 		if (array==false) {
// 			reject("error2");
// 		} else {
// 			resolve(array.sort());
// 		}
// 	})
// }

// makeAllCaps(arrayOfWords)
// .then(resolve => {
// 	return sortWords(resolve);
// })
// .then(resolve => {
// 	console.log(resolve);
// })
// .catch(reject => {
// 	console.log(reject);
// })


exercises.
// Exercise 1
// let item = 10;
//
// const compareToTen = (num) => {
// 	return new Promise((resolve,reject) => {
// 		if (num > 10) {
// 			resolve(`${num} is greater than 10.`);
// 		} else if (isNaN(num)) {
// 			reject(`"${num}" is not a number. Error!`)
// 		} else {
// 			reject(`${num} is not greater than 10.`);
// 		}
// 	});
// }
//
//
// compareToTen(item).then((resolve) => {
// 	console.log(resolve)
// 	})
// .catch((reject) => {
// 	console.log(reject)
// 	})
//
//
// // Exercise 2 : Promises
// // Instructions
// 
//
// let promise = new Promise((resolve,reject) => {
// 	setTimeout(() => {
// 		resolve("success");
// 	},4000);
// })
//
// promise.then(resolve => {
// 	console.log(resolve);
// })
//
//
// let shortPromise = Promise.resolve("success");
//
// shortPromise.then(resolve => {
// 	console.log(resolve);
// }).catch(reject => console.log(reject));
//
//
// let errorPromise =  Promise.reject("Ooops something went wrong");
//
// errorPromise.then(resolve => {
// 	console.log(resolve);
// }).catch(reject => console.log(reject));
//
//
//
// // Exercise 3 : Resolve & Reject
// // Instructions
//
// //     Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// //     Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
//
//
// let promise1 = Promise.resolve(3+2);
//
// let promise2 = Promise.reject("Boo");
//
// promise1.then(resolve => console.log(resolve));
//
// promise2.catch(reject => console.log(reject));
