//Santiago Zabaleta 6/13/13 Expression Worksheet

//Dog Years
var a = 7; //amount of dog years
var b = 1; //amount of human years

var c = "Sparky is" + " " + b + " " + "human years old which is" + " " + a + " " + "in dog years.";
console.log(c); //the whole equation, and dog years will change as the variables change

//Slice of Pie Part I
var noStudents = 12; //Number of Students at the party
var noPizzas = 5; //Number of Pizzas Ordered
var noSlices = 8; //Number of slices per Pizza

var totalSlices = noPizzas * noSlices / noStudents;
console.log("Each person ate" + " " + totalSlices + " " +  "slices of the pizza at the party."); //totalSlices represents the total slices that each person would get

//Slice of Pie Part II

var sparkysFood  = totalSlices / noStudents; //sparkysFood represents Sparkys slices, the equation is dividing the number of slices by students, the remainder being what Sparky would get
console.log("Sparky got" + " " + sparkysFood + " " + "slices of pizza"); //The equation completed as a whole with what to print

//Average Shopping Bill
var pastTotals = [100, 62, 92, 78, 40]; //Last 5 Totals spent on groceries in monetary amount
var avgTotal = pastTotals[0] + pastTotals[1] + pastTotals[2] + pastTotals[3] + pastTotals[4]; //Average spent on groceries, by adding past 5 totals
console.log("You have spent a total of"+ " " + "$" + avgTotal + " " + "on groceries over 5 weeks. That is an average of" + " " + "$" + avgTotal/5 + " " + "per week."); //We subtract the number here at the end, depending on the average Total given.

//Discounts

var ogPrice = 100; //Original Price of the Product
var discPerc = 20; // Discount Percentage, enter number after decimal
var salesTax = .06; // State Tax in decimal form
var prodName = "Lacoste Shirt"; //Description of Item

var discPrice = ogPrice * discPerc; //This is getting the discount amount
var totalDiscPrice = discPrice / ogPrice  // This is gathering the total amount of the discount
var withoutTax = ogPrice - totalDiscPrice //This is the price they would pay for that item without Tax
var withTax = withoutTax * salesTax //Amount that will be multiplied to get the total of the sales tax
var actualCost = withoutTax + withTax   //Actual cost of the shirt with tax added and discount subtracted
console.log("Your" + " " + prodName + " " + "was originally" + " " + "$" +ogPrice + "," + " " + "but after a" + " " + discPerc + "%" +" " + "discount, it is now" + " " + "$" + withoutTax + " " + "without tax, and" + " " + "$" + actualCost + " " + "with tax."); //The equation as a whole with everything computed
