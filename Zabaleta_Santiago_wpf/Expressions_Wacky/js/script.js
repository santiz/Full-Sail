//Santiago Zabaleta 6/13/13 Expression Worksheet

var welcomeMessage = ("Well Hello there! Welcome to the Internet!")
alert(welcomeMessage); //Welcoming message for user
var name = prompt("Please enter your name below:")
console.log("The users name is" + " " + name) //Gets the users name
var title= ("Today, we'll pretend that you're going to build a small building. Given the fact that you'll have unlimited pieces of 4ft long pieces of wood for the foundation of the building.")
alert(title);
var length = prompt("Please enter the length, in feet, of the desired building below:");
console.log(name + " " + "Has entered a length of" + " " + length + "ft.");
var width = prompt("Pleas enter the width of the desired building below:");
console.log(name + " " + "Has entered a width of" + " " + width + "ft.");
var sqft = width * length;
alert("Your buildings total square footage is" + " " + sqft + "ft. squared")
var total = sqft * 4;
console.log("The total square footage of" + " " + name + "'s " + "building is" + " " + total+ "ft. squared");
alert(total + " " + " pieces is of wood, is the amount you'll be able to fit into the" + " " + sqft + "ft. squared building.");
console.log(name + " " + "will need" + " " + total + " " + "pieces of wood for their building");
