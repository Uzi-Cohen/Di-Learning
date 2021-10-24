//#1
// function add(x, y) {
//   return x + y;
// }

//#2
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3) = 13

//#3
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) = 31

// #4
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) = 17

// #5
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) = 16


// //daily challenge
// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// //copy
// let basktet = groceries;
// //modify
// groceries.totalPrice = '35$' //Will we also see this modification in the copied objects yes.
// //modify again
// groceries.payed = 'false'// yes again because we areamodifying the main object, due to us declaring that our copied object is the same as the first
// //any modification to the first will also modify the second. and visa versa.
