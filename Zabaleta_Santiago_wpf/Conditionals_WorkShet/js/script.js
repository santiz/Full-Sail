//Conditionals Worksheet - Santiago Zabaleta 06/19/2013

// Group 1: Celsius to Fahrenheit converter

// Group 2: Check the Login


// Group 3: Movie Ticket Price

var name = prompt("Hello, Welcome to Regal Cinemas, what's your name?");
console.log("The users name is, " + name + ".");
var age = prompt("How old are you, if you don't mind me asking, " + name + "? Because you might qualify for a cheaper ticket!",55);
console.log(name + " happens to be " + age + " years old.");
var userAge;
userAge = (age <= 10 || age >= 55) ? name + "'s ticket Price will be $7 for today" : name + "'s ticket price will $12.00 for today";
console.log(userAge);
var time = Number (prompt("Actually, do you have the time?", 3));
var userTime = (time <= 3 || time >= 5) ? name + "'s ticket will be $7, due to it being " + time + "pm." : name + "'s ticket price will be $12, due to it being " + time + "pm.";
console.log(userTime);
alert(userTime);
