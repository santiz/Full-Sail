//Santiago Zabaleta 6/15/13 Expression Worksheet

var welcome = ("Welcome to Dominos, my name is Santiago, how can I help you today?");
alert(welcome); // Welcoming message for the user into Dominos.
var name = prompt("I'd like to make an order of Pizzas, some wings, and maybe a couple order of breadsticks...\n *Enter your name below *");
console.log("Santiago has welcomed in" + " " + name + " " + "into the Domino's.");
var pizzas = prompt("Ok" + " " + name + "," + "let's start with the amount of pizzas that you'd like. We unfortunately ran out of Small, medium and Extra Large dough, but we do have some Large dough left over. If you'd like to get that? *You nod* (Enter amount of Large Pizzas below)");
console.log(name + " " + "has ordered" + " " + pizzas + " " + "of pizzas.");
var wings = prompt("Ok, now that we ordered the pizzas, you said wings as well... how many orders of that?");
console.log(name + " " + "has ordered" + " " + wings + " " + "orders of the spicy wings");
var bread = prompt("Santiago: Anything Else? \n" + name + ":" + "Yes, can I also get an order of breadsticks? \n (Enter order amount below):");
console.log(name + " " + "has also ordered" + " " + bread + " " + "orders of the breadsticks");
var repeat = ("Ok so, we have" + " " + pizzas + " " + "order(s) of the pizza(s)," + " " + wings + "  " + "order(s) of the wings and also the" + " " + bread + " " + "order(s) of the breadsticks? \n Click ok to continue");
console.log(name + " " + "has confirmed the order" + " " + pizzas + " " + "pizza(s)," + " " + wings + " " + "order(s) of the wings" + " " + "and also" + " " + bread + " " + "order(s) of the breadsticks.");
var totalamt = pizzas * 14.99 + wings * 8.99 + bread * 3.99
var tax = totalamt * .06  //Able to change the tax amt. according to state in decimal form.
var taxtotal = tax + totalamt  // where the tax is totaled
var amount = ("Alright," + " " + name + "," + "your total is going to be" + " " + "$" + taxtotal + " " + "after taxes.");
alert(amount);
console.log(name + "'s " + "grand total for the order that he placed today was" + " " + "$" + taxtotal);
var thanks = (name + " " + "*hands Santiago his Credit Card* \n*Santiago grabs the credit card sliding it*");
alert(thanks);
alert("Santiago: Alright, here's your card back it'll be ready in 15 minutes!");



