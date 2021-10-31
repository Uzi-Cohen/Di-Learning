const searchBox = document.querySelector("#searchbox");
const submit = document.querySelector("#submit");

const getImages = (event) => {
	event.preventDefault();
	let searchTerm = searchBox.value;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
	xhr.send();
	xhr.onload = function() {
		let obj = JSON.parse(xhr.response)
		appendDiv(obj["data"]["images"]["original"]["url"])
	}
	searchBox.value = "";
}

submit.addEventListener("click",getImages);

const appendDiv = (url) => {
	console.log("append")
	let pictures = document.querySelector("#pictures")
	let div = document.createElement("div");
	let img = document.createElement("img");
	img.setAttribute("src",url);
	div.appendChild(img);
	let button = document.createElement("button")
	button.textContent = "Delete"
	button.addEventListener("click",deleteDiv);
	div.appendChild(button);
	pictures.appendChild(div);
}

const deleteDiv = (event) => {
	let parent = event.target.parentNode;
	parent.remove();
}

const deleteAllButton = document.querySelector("#deleteall");


const deleteAll = () => {
	let divs = document.querySelectorAll("div");
	for (div of divs) {
		div.remove();
	}
}

deleteAllButton.addEventListener("click",deleteAll);