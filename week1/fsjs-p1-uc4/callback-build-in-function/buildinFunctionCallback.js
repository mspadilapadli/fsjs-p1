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
const countries2 = countries.map((country) => country.toUpperCase());
console.log(countries2);

//* 3
const numbers2 = numbers.map((number) => number * number);
console.log(numbers2);

//* 4
const names2 = names.map((name) => name.toUpperCase());
console.log(names2);

//* 5
const landCountries = countries.filter((country) => country.includes("land"));
console.log(landCountries);

//* 6
const sixCharCountries = countries.filter((country) => country.length == 6);
console.log(sixCharCountries);

//* 7
const moreSixCharCountries = countries.filter((country) => country.length >= 6);
console.log(moreSixCharCountries);

//* 8
const eCharCountries = countries.filter((country) => country[0] == "E");
console.log(eCharCountries);

//* 9
let chainingTotal = numbers
    .filter((num) => num % 2 == 0)
    .map((num) => (num <= 7 ? num : 0))
    .reduce((total, num) => (total += num), 0);
console.log(chainingTotal);
