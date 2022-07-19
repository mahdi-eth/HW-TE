const input = document.getElementById("input");
const submit = document.getElementById("submit");

const greet = (userName) => {
  userName = userName.toUpperCase();
  userName = userName.split(" ").join("_");
  return `Hello ${userName}`;
};
const greetings = document.createElement("h2");
greetings.style.color = "orange";
document.body.appendChild(greetings);

const greetingsAction = () => {
  greetings.innerHTML = greet(input.value);
};

submit.addEventListener("click", greetingsAction);
