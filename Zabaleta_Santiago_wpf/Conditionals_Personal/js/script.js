//Santiago Zabaleta 6/20/13 Conditionals Assignment - Personal

var gymYes = "Yes"; //If user agrees to go
var gymNo = "No"; //If user does not agree to go

var ask = prompt("Hmm, you just woke up, will you go to the gym today?\nYes or\nNo"); //The prompt asking what the user will do

if(ask == gymYes){
    alert("Well get up and go pump some iron!")
    console.log("User stated that he does want to go to the gym"); //If he agrees to go to the gym
}else if(ask == gymNo){
    alert("Well keep sleeping you laz bum!")
    console.log("User will stay in because he's a lazy bum."); //If the user does not want to go, gets threatening message :)
}if(ask == gymYes){
    var legs = "Legs";
    var bis = "Bis"
    var back = "Back"
    var typeMus = prompt("Last time you did shoulders, today, will you do?(Legs, Bis, Back");
}else if(ask == gymNo){
    console.log("Today the user has stated he will do nothing");
}else if(gymYes == ask){
    console.log(typeMus == back);
}

