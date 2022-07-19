const greet = (userName) => {
  userName = userName.toUpperCase();
  userName = userName.split(' ').join('_');
  console.log(`hello ${userName}`);
};
greet("mahdi");
greet("mahdi ettehad nejad");
