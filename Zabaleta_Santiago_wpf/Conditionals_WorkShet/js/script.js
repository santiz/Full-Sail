//Conditionals Worksheet - Santiago Zabaleta 06/19/2013

// Group 1: Celsius to Fahrenheit converter

var userUnit = prompt("Please enter a unit of Temperature:\nC for Celsius\nF for Fahrenheit");
var degFahren = "F";
var degCel = "C";

if(userUnit == degFahren){
    //user has inputted F for Fahrenheit
    console.log("User has inputted Fahrenheit as their unit of Temperature");
}else if(userUnit == degCel){
    //User unit is Celsius
    console.log("User has inputted Celsius as their unit of Temperature.");
}
var tempAmtF = prompt("Please input the Temperature amount you want to convert below:");
var celCalc = 5 / 9 * (tempAmtF - 32);

if (userUnit == degFahren){
    alert(tempAmtF + " degrees in Fahrenheit is " + celCalc + " degrees Celsius.");
}else if(userUnit == degCel)
    var tempAmtC = prompt("Please input the Temperature amount you want to convert below:");
var fahrCalc = (9 / 5) * tempAmtC + 32;{
    alert(tempAmtC + " degrees in Celsius is " + fahrCalc + " degrees Fahrenheit.")
}


// Group 2: Check the Login

var userName = prompt("Please Enter your user name below:");
var adminName = "Johnnyappleseed";
(userName == adminName) ? console.log("Captured Username") : console.log("User not found. Try again.");
var adminPass = "sh823e7yd7wowiudc";
if(userName == false){
    console.log("Enter password");
}else if (userPass == adminPass){

}
var userPass = prompt("Enter User password below:");
if (userPass == adminPass){
    console.log("Welcome " + userName);
}


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