const countries = [
    "Estonia",
    "Finland",
    "Sweden",
    "Denmark",
    "Norway",
    "IceLand",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* Release 0

//* 1
numbers.forEach((number) => {
    console.log(number);
});

countries.forEach((country) => {
    console.log(country);
});
names.forEach((name) => {
    console.log(name);
});

//* 2
let countries2 = countries.map((country) => country.toUpperCase());
console.log(countries2);

//* 3
let numbers2 = numbers.map((number) => number * number);
console.log(numbers2);

//* 4
let names2 = names.map((name) => name.toUpperCase());
console.log(names2);

//* 5
let landCiuntries = countries.filter((country) => country.includes("land"));
console.log(landCiuntries);
