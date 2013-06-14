//Santiago Zabaleta 6/13/13 Expressions Personal

var welcome = "We want to know how much you spend on average each year on gas. Follow the prompts. Enjoy!"
alert(welcome);
var age = prompt("Enter your age here:");
console.log("The user is" + " " + age + " " + "old.")
var gasA = prompt("Please enter the amount spent this week on gas. \n Enter the amount here:");
console.log("The user spent" + " " + "$" + gasA + " " + "this week.")
var totalMonth = gasA * 4;
console.log("The user spent" + " " + "$" + totalMonth + " " + "this month.")
alert("So you spent a total of" + " " + "$" + totalMonth + " " + "on gas this month, in this economy!");
var yearTotal = totalMonth * 12;
console.log("That means he will spend" + " " + "$" + yearTotal + " " + "for this whole year")
alert("That means you spend a total of" + " " + "$" + yearTotal + " " + "this year!");
var fiveYearTotal = yearTotal * 5;
alert("Since you are" + " " + age + "," + " " + "you will have spent a total of" + " " + "$" + fiveYearTotal + "!")
consle.log("In a 5 year period the user will spend a total of" + " " + "$" + fiveYearTotal +  ".")