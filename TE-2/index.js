const greetings = document.getElementById("greetings");

const greet = (userName) => {
  userName = userName.toUpperCase();
  userName = userName.split(' ').join('_');
  console.log(`hello ${userName}`);
  return (`hello ${userName}`);
};
greet("mahdi");
greet("mahdi ettehad nejad");


greetings.innerHTML = greet("aghdas");