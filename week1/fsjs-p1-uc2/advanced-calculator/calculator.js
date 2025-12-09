"use strict";

class Calculator {
    //write your code here
    constructor() {
        this.result = 0;
    }
    add(num) {
        this.result += num;
        return this;
    }
    subtract(num) {
        this.result -= num;
        return this;
    }
    multiply(num) {
        this.result *= num;
        return this;
    }
    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("ga bisa di bagi 0 ya kang");
        }
        return this;
    }
    square() {
        this.result *= this.result;
        return this;
    }
    squareRoot() {
        this.result = Math.sqrt(this.result);
        return this;
    }

    areaOfTheCircle(r) {
        this.result = Math.PI * r * r;
        return this;
    }
    circumference(r) {
        this.result = 2 * Math.PI * r;
        return this;
    }
}

/**
 * you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

// execute Calculator in file index.js
module.exports = Calculator;
