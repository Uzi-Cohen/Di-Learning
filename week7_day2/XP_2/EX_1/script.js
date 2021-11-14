async function myFetch() {
    const response = await fetch('http://localhost:8080/');
    console.log(response);
  }

  myFetch();