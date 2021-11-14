let inputs = document.getElementsByTagName("input");

const checkInputs = () => {
	let values = [];
	let button = document.querySelector("button");
	for (let input of inputs) {
		if (input.value == "") {
			values.push(false);
		}
	}
	button.disabled = (values.includes(false)) ? true : false;
}

const addListeners = (() => {
	for (let input of inputs) {
		input.addEventListener("keyup",checkInputs)
	}
})()

const display = (message) => {
	let root = document.getElementById("root");
	root.innerHTML = "";
	let p = document.createElement("p");
	p.textContent = message;
	root.appendChild(p);
}

const register = () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
	let email = document.getElementById("email").value;
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
    let data = {firstName,lastName,email,username,password}
    fetch('http://localhost:2005/register',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
	.then(res => res.json())
	.then(data => {
		let message = data ? `Hello ${username}! Your account is now active` : `That username is already in use. Please try another.`;
		display(message);
	})
}

const login = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let data = {username,password}
    fetch('http://localhost:2005/login',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
	.then(res => res.json())
	.then(data => {
		let message = data ? `Hi ${username}, welcome back!` : `Either your username or password is wrong. Please try again.`;
		display(message);
	})}