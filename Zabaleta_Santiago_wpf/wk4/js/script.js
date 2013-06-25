//WPF Week 4

console.log('-----Scope-----');

/*var width = 5;

function calArea(){
    var width = 10;
    var height = 15;
    var area = width * height;
    console.log(area);
}
calArea();
console.log(width);  */

console.log('------Arguments and Parameters-----');
/*

function calculateArea(w,h){
    var area = w * h;
    console.log(area);
}
calculateArea(20, 30) */



console.log('-----Return Function----');

/*
function calcArea(w,h){
    var area = w * h;
    return area;
}

var total = calcArea(20, 30);
console.log(total);
*/

console.log('-----Annoymous Functions-----');

var calcArea = function(w, h){
    var area = w * h;
    return area;
}

var a = calcArea(20,30);
console.log(a);
