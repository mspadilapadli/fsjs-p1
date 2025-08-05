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

//* 10
function getStringList(arr) {
    return arr.filter((item) => typeof item == "string");
}

console.log(getStringList(countries));
console.log(getStringList(names));
console.log(getStringList(numbers));

//* 11
const total = numbers.reduce((total, num) => (total += num), 0);
console.log(total);

//* 12
const sentance =
    countries.reduce((acc, country, index) => {
        if (index === 0) return country;
        else if (index == countries.length - 1) return `${acc} dan ${country}`;
        else return `${acc}, ${country}`;
    }, "") + ` adalah negera-negara Eropa Utara`;
console.log(sentance);

// * not recoemnded , walaupun hasilnya sama, tapi disni acc di tambahkan lalu di return,
// //karena reduce() seharusnya tidak mengubah akumulator secara langsung, melainkan mengembalikan versi barunya.
// const sentance =
//     countries.reduce((acc, country, index) => {
//         if (index === 0) return (acc += `${country},`);
//         else if (index == countries.length - 1) return `${acc} dan ${country}`;
//         else return (acc += ` ${country}`);
//     }, "") + ` adalah negera-negara Eropa Utara`;
// console.log(sentance);

//* 13
// * every()
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
let every1 = numbers.every((num) => num < 11);
console.log(every1);

let every2 = numbers.every((num) => num > 5);
console.log(every2);

const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // false, karena 1, 3, 5 tidak genap

//* some()
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
let some1 = numbers.some((num) => num > 11);
console.log(some1);

let some2 = numbers.some((num) => num > 9);
console.log(some2);

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);

//* 14
const hasSevenChar = names.some((name) => name.length > 7);
console.log(hasSevenChar);

//* 15
const allHasLand = countries.every((country) => country.includes("land"));
console.log(allHasLand);
