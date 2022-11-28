let buttonElement = document.querySelector("#button_login");
console.log(buttonElement);

const userAction = async () => {
    const response = await fetch('localhost:3000/aula/1', {
      method: 'POST',
      body: myBody, 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); 
  }
console.log(userAction);