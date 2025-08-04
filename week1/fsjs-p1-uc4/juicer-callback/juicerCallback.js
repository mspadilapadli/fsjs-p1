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

function juicer(choppedFruits, cb) {
    console.log("I already have", choppedFruits);
    console.log(
        "Please wait.. I'll blend these chopped fruits in blender...\n"
    );

    // Pastikan menjadi proses async dengan menggunakan setTimeout
    setTimeout(() => {
        cb(choppedFruits);
    }, 4000);
}

//Main function
function startJuicing(result) {
    console.log("I wanna make smome fruit juices");
    const fruits = ["apple", "orange", "grape"];

    // invoke fruitChop
    fruitChop(fruits, (choppedFruits) => {
        choppedFruits = choppedFruits.map((fruit) => (fruit += "-chopped"));
        console.log("I'm done chopping!", choppedFruits);
        console.log("\n");

        juicer(fruits, (juicedFruit) => {
            juicedFruit = juicedFruit.map((fruit) => (fruit += "juice"));
            console.log("Juice ready to serve!, here your juices", juicedFruit);
        });
    });
}

startJuicing();
