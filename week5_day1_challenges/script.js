const searchParams = new URLSearchParams(window.location.search);

const  data = Object.fromEntries(searchParams)


let p = document.createElement("p");
p.innerText = `${data["name"]} ${data["comments"]}`
document.getElementsByClassName("container")[0].appendChild(p);


// let marioGame = {
//     detail : "An amazing game!",
//     characters : {
//         mario : {
//           description:"Small and jumpy. Likes princesses.",
//           height: 10,
//           weight: 3,
//           speed: 12,
//         },
//         bowser : {
//           description: "Big and green, Hates princesses.",
//           height: 16,
//           weight: 6,
//           speed: 4,
//         },
//         princessPeach : {
//           description: "Beautiful princess.",
//           height: 12,
//           weight: 2,
//           speed: 2,
//         }
//     },
// };
//
//
// let json = JSON.stringify(marioGame, null, 2);
// console.log(json);
// json = JSON.parse(json);
