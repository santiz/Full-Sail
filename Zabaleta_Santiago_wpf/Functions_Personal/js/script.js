//Santiago Zabaleta 6/26/13 Functions Personal

console.log("------ Functions Personal ------");

console.log("At work, you're trying to see how many people fit in a line, when they're waiting to be attended. Every foot, is equal to a person standing. The square footage of the building is"); //Explains to the user what the setting is

function calcSqft(h,l){
    var sqft = h * l; //calculates square footage
    console.log("According to the square footage of where people make the line, you would be able to fit " + sqft + " people on the line."); //Returns a message for the user according to what is inputted into the calcSqft below.
}
calcSqft(20, 1); //the lenght/height of the line, to calculate the amount of people on the line. *Assuming the 1foot per person

