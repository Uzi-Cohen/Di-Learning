let tasks = localStorage.getItem('storedTasks') ? JSON.parse(localStorage.getItem('storedTasks')) : [];

function addTask(section) {
	let name = document.querySelector(`.${section} .name`).value;
	if (name === "") {
		alert("Please enter a task name");
		return;
	}
	let task = {
		name: name,
		startDate: document.querySelector(`.${section} .startDate`).value,
		startTime: document.querySelector(`.${section} .startTime`).value,
		finishDate: document.querySelector(`.${section} .finishDate`).value,
		finishTime: document.querySelector(`.${section} .finishTime`).value,
		desc: document.querySelector(`.${section} .desc`).value,
		completed: false	
	};
	if (section == "new") {
		tasks.push(task);
	} else {
		number = section.substr(2);
		tasks[number]= task;
	}
	localStorage.setItem('storedTasks',JSON.stringify(tasks));
	createTable();
}


function parseDate(date) {
  var b = date.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}

const calculateDays = (finishDate) => {
	let date = parseDate(finishDate);
	let today = new Date;
	let difference = (date - today) / (1000 * 60 * 60 * 24);
	let rounded = Math.floor(difference)+1;
	return rounded;
}



const convertDay = (date) => {
	let dateB = parseDate(date);
	let converted = `${dateB.getDate()} - ${dateB.getMonth()+1} - ${dateB.getFullYear()}`
	return converted;
}

const clickOut = () => {
	let hoverItems = document.querySelectorAll(":hover")
	let clickedItem = hoverItems[hoverItems.length-1];
	if (clickedItem.nodeName !== "INPUT") {
		document.removeEventListener("click",clickOut);
		createTable();
	}
}

const editDiv = (event) => {
	document.addEventListener("click",clickOut);

  	let number = event.target.classList[0].substr(2);
	let desc = document.querySelector(`.t-${number}.desc`);
	if (desc.classList.contains("hidden")) {
		desc.classList.remove("hidden")
	}
	let divs = document.querySelectorAll(`.t-${number}.editable`)
	for (let div of divs) {
		div.removeEventListener("dblclick",editDiv);
		let label = div.classList[2];
		let type;
		if (label === "name" || label === "desc") {
			type = "text";
		} else if (label === "startDate" || label === "finishDate") {
			type = "date";
		} else {
			type = "time";
		}
 		div.innerHTML=`
		  <input type="${type}" class="${label}" value="${tasks[number][label]}">
		`
	}
	let save = document.querySelector(`.t-${number}.save`);
	save.innerHTML = `<button onclick="addTask('t-${number}')"><i class="far fa-save"></i></button>`
}

const deleteDiv = (event) => {
	let number = event.target.closest(".delete").classList[0].substr(2);
	let answer = confirm("Are you sure you want to delete this task?");
	if (answer) {
		tasks.splice(number,1);
		updateStorage();
		createTable();
	}
}

const addListeners = () => {
	let nameDivs = document.querySelectorAll(".name");
	for (let div of nameDivs) {
		div.addEventListener("click",toggleDesc);
	}
	let checkboxDivs = document.querySelectorAll(".checkbox")
	for (let div of checkboxDivs) {
		div.addEventListener("click",toggleCompleted);
	}
	let editableDivs = document.querySelectorAll(".editable")
	for (let div of editableDivs) {
		div.addEventListener("dblclick",editDiv);
	}
	let deleteDivs = document.querySelectorAll(".delete")
	for (let div of deleteDivs) {
		div.addEventListener("click",deleteDiv);
	}
}

const toggleDesc = (event) => {
	let number = event.target.closest("div").classList[0];
	let desc = document.querySelector(`.${number}.desc`)
	if (desc.textContent !== "" && desc.childElementCount == 0) {
		desc.classList.toggle("hidden");
		let icon = document.querySelector(`.${number}.name i`);
		if (icon.classList.contains("fa-angle-down")) {
			icon.className = "fas fa-angle-up";
		} else if (icon.classList.contains("fa-angle-up")) {
			icon.className = "fas fa-angle-down";
		}
	}
}

const toggleCompleted = (event) => {
	let number = event.target.closest(".checkbox").classList[0].substr(2);
	tasks[number].completed = !tasks[number].completed;
	updateStorage();
	styleCompleted(number);
}

const styleCompleted = (number) => {
	let divs = document.querySelectorAll(`.t-${number}`);
	let remaining = document.querySelector(`.t-${number}.remaining`);
	if (tasks[number].completed) {
		remaining.classList.add("invisible");
		for (let item of divs) {
			item.classList.add("completed");
		}
	} else {
		remaining.classList.remove("invisible");
		for (let item of divs) {
			item.classList.remove("completed");
		}
	}
	styleLate(number);
}

const updateStorage = () => {
	localStorage.setItem('storedTasks',JSON.stringify(tasks));
}


const styleLate = (number) => {
	let days = document.querySelector(`.t-${number}.remaining`).textContent;
	let completed = tasks[number].completed;
	let divs = document.querySelectorAll(`.t-${number}`);
	for (let item of divs) {
		if (!completed && days < 0) {
			item.classList.add("late");
		} else {
			item.classList.remove("late")
		}
	}
}		


const clearAll = () => {
	tasks = [];
	localStorage.removeItem('storedTasks')
	list.innerHTML = "";
}

const createTable = () => {
	let list = document.getElementById("list")
	list.innerHTML = "";
	console.log(tasks);
	tasks = tasks.sort((a,b) => parseDate(a.startDate) - parseDate(b.startDate));
	console.log(tasks);
	for (let i=0; i<tasks.length; i++) {

		let startDate = tasks[i].startDate == "" ? "" : convertDay(tasks[i].startDate);
		let finishDate = tasks[i].finishDate == "" ? "" : convertDay(tasks[i].finishDate);
		let days = tasks[i].finishDate == "" ? "" : calculateDays(tasks[i].finishDate);
		let alternate = i%2==0 ? " alternate" : "";
		let arrow = tasks[i].desc === "" ? "" : ` <i class="fas fa-angle-down"></i>`;
		let content = `
		  <div class="t-${i} checkbox${alternate}"><i class="far fa-circle"></i><i class="far fa-check-circle"></i></div>
		  <div class="t-${i} delete${alternate}"><i class="far fa-trash-alt"></i></div>
		  <div class="t-${i} editable name${alternate}">${tasks[i].name}${arrow}</div>
		  <div class="t-${i} editable startDate${alternate}">${startDate}</div>
		  <div class="t-${i} editable startTime${alternate}">${tasks[i].startTime}</div>
		  <div class="t-${i} editable finishDate ${alternate}">${finishDate}</div>
		  <div class="t-${i} editable finishTime${alternate}">${tasks[i].finishTime}</div>
		  <div class="t-${i} remaining${alternate}">${days}</div>
		  <div class="t-${i} save"></div>
		  <div class="t-${i} editable desc hidden">${tasks[i].desc}</div>
		`;
		list.insertAdjacentHTML("beforeend", content);

		styleCompleted(i);
	}
	addListeners();
}

createTable();

const openGraph = () => {

}


// let graph;

// let days = []

// const generateDays = () => {
// 	let today = new Date;
// 	today.setHours(0,0,0,0);
// 	days.push(today);
// 	for (i=0;i<6;i++) {
// 		let nextDay = new Date(days[i])
// 		nextDay.setDate(nextDay.getDate() + 1)
// 		days.push(nextDay);
// 	}
// }

// const displayOnGraph = () => {
// 	tasks = tasks.sort((a,b) => a.startDate - b.startDate);

// 	for (let i = 0; i<tasks.length; i++) {
// 		let startInt = calculateDays(tasks[i].startDate);
// 		let finishInt = calculateDays(tasks[i].finishDate);

// 		div = document.createElement("SPAN");
// 		div.setAttribute("class","task");
// 		div.style.top = `${(i+1)*50}px`;
// 		div.style.left = `${(startInt)*150}px`;
// 		div.style.width = `${(finishInt-startInt+1)*150}px`
// 		div.textContent = tasks[i].name;
// 		graph.appendChild(div);
// 	}
// }

// const createGraph = () => {
// 	generateDays();
// 	graph = document.createElement("div");
// 	graph.setAttribute("id","graph");
// 	graph.style.height = `${tasks.length*150}px`;

// 	let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// 	for (let day of days) {
// 		let dayName = dayNames[day.getDay()];
// 		// console.log(dayName);
// 		let div = document.createElement("div");
// 		div.textContent = `${dayName} ${day.getDate()}.${day.getMonth()+1}`;
// 		graph.appendChild(div);
// 	}
// 	let body = document.querySelector("body");
// 	body.appendChild(graph);
// 	displayOnGraph();
// }

// createGraph();





