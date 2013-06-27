//Functions Worksheet, Santiago Zabaleta, 6-26-2013

console.log("------ Circumference ------")

var calcCircum = function(d){
    var circum = d * 3.14;  //where the radius gets calculated by multiplying the diameter by pie
    return circum;
}

var c = calcCircum(20);   //the size of the diameter of the circle
console.log("The Circumference of the circle is " + c);



console.log("------ Stung ------")

var weight = 200; //weight of the animal

var calcBeeStings = function(t){
    var noTimes = weight * 8.666666667; //function which calculates the number of bee stings it takes to kill an animal by the weight of it
    return noTimes;
}

var bT = calcBeeStings();
console.log("It takes " + bT + " bee stings to kill a " + weight + "lb animal."); // This takes the number which was multiplied in the function to result automatically into the console, per users changes.