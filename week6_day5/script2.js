let tasks = JSON.parse(localStorage.getItem('storedTasks'));

let graph;

let days = []


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

const generateDays = () => {
	let today = new Date;
	today.setHours(0,0,0,0);
	days.push(today);
	for (i=0;i<6;i++) {
		let nextDay = new Date(days[i])
		nextDay.setDate(nextDay.getDate() + 1)
		days.push(nextDay);
	}
	// console.log(days);
}

const displayOnGraph = () => {
	let thisWeekTasks = tasks.filter(a => {
		return calculateDays(a.startDate)<7 && calculateDays(a.finishDate)>=0;
	});
	tasks = thisWeekTasks.sort((a,b) => parseDate(a.startDate) - parseDate(b.startDate));

	for (let i = 0; i<tasks.length; i++) {
		let startInt = calculateDays(tasks[i].startDate);
		let finishInt = calculateDays(tasks[i].finishDate);
		div = document.createElement("SPAN");
		div.setAttribute("class","task");
		div.style.top = `${(i+1)*50}px`;
		div.style.left = `${(startInt)*120}px`;
		div.style.width = `${(finishInt-startInt+1)*120}px`
		graph.style.height = `${(1+tasks.length)*50}px`
		div.textContent = tasks[i].name;
		graph.appendChild(div);
	}
}

const createGraph = () => {
	generateDays();
	graph = document.createElement("div");
	graph.setAttribute("id","graph");
	graph.style.height = `${tasks.length*150}px`;

	let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	for (let day of days) {
		let dayName = dayNames[day.getDay()];
		let div = document.createElement("div");
		div.textContent = `${dayName} ${day.getDate()}.${day.getMonth()+1}`;
		graph.appendChild(div);
	}
	let body = document.querySelector("body");
	body.appendChild(graph);
	displayOnGraph();
}

createGraph();




