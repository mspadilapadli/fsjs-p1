"use strict";
const Calculator = require("./calculator");
// execute Calculator in here
const cal = new Calculator();

// let result = cal.add(100).subtract(50).multiply(2).divide(5);
// console.log(result);
let result = cal
    .add(8)
    .subtract(3)
    .multiply(2)
    .divide(2)
    .square()
    .squareRoot()
    .areaOfTheCircle(4)
    .circumference(2);
console.log(result);
