const greet = (userName) => {
  userName = userName.toUpperCase();
  userName = userName.split(' ').join('_');
  console.log(`Hello ${userName}`);
  return (`Hello ${userName}`);
};

const greetings = document.createElement("h2");
greetings.innerHTML = greet("mahdi");
greetings.style.color = "orange";
document.body.appendChild(greetings);