//Santiago Zabaleta 6/26/13 Functions Industry

console.log("------ Functions - Industry -----");

alert("At work, you have to calculate how much revenue your store made today. Start adding the amount of items you sold today.\n(In the following prompts)");

var sale1 = prompt("How many Galaxy S4's were sold today");
console.log("Today we sold " + sale1 + " Galaxy S4's");
var sale2 = prompt("How many Note 2's were sold today?");
console.log("Today we sold " + sale2 + " Note 2's");
var sale3 = prompt("How many Galxy Tabs did you sale today?");
console.log("Today we sold " + sale3 + " Galaxy Tabs");
var sale4 = prompt("Did you sell Geek Squad Protection (GSP) with any of the sales?");
//all the above ^^ is the prompts the user answers about the sales of each item sold
var yes = "yes";
var no = "no";

if(sale4 == yes){
    alert("Way to go! Keep up the good work!");
    console.log("The user is selling GSP, that is good!");

}else{
    alert("Make sure you always enforce the GSP to the customers!");
    console.log("The user did not sell any GSP. Go over closing talks with the user to close the sale with GSP next time.");
}
//Function which determines wheter the user sold GSP or not

var total1 = sale1 * 199.99; //Total of the Galaxy S4
var total2 = sale2 * 199.99; //Total of Note 2
var total3 = sale3 * 299.99; //Total of the Tablets
var gTotal = total1 + total2 + total3; //Grand total being totaled
var tax = gTotal * .06; //Tax being inducted to the total
var taxTotal = tax + gTotal; //Final tax calculation
console.log("Today we sold a total of $" + taxTotal);

var projSales = 3000; //Amount that the user can change for projected sales

if(taxTotal > projSales){
    console.log("The user went over the projected sales, which was $" + projSales);
    alert("Way to go! You went over the store's projected sales of $" + projSales + "! Keep up the good work!");
}else{
    console.log("The user did not go over the projected sales of $" + projSales);
    alert("The projected sales were not met, which was $" + projSales +  ". Please speak with your manager on how you can improve this");
} // Function which prompts the user whether he met the sales goal or not



