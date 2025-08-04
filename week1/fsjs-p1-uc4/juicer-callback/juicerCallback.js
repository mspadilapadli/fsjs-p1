//
"use strict";
function fruitChop(fruits, cb) {
    console.log("Please wait.. I'll chop these fruits..");
    console.log(fruits);
    console.log("\n");

    //invoce cb
    setTimeout(() => {
        cb(fruits);
    }, 2000);
}

//Main function
function startJuicing(result) {
    console.log("I wanna make smome fruit juices");
    const fruits = ["apple", "orange", "grape"];

    // invoke fruitChop
    fruitChop(fruits, (choppedFruits) => {
        console.log("I'm done chopping!", choppedFruits);
        console.log("\n");
    });
}

startJuicing();
