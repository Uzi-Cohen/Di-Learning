let form = document.forms[0];
form.addEventListener("submit", mySubmit);

function mySubmit(event){
    event.preventDefault();
    let obj = {};
    obj.firstName = form.elements["firstName"].value;
    obj.lastName = form.elements["firstName"].value;
    console.log(obj);
    obj = JSON.stringify(obj,null,2);
    console.log(obj);

    document.getElementsByClassName("container")[0].innerHTML = obj;
}