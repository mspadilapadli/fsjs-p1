//* release 1

const countries = [
    "Nepal",
    "Canada",
    "Morocco",
    "Thailand",
    "Portugal",
    "Peru",
    "South Africa",
    "Vietnam",
    "Ukraine",
    "Philippines",
    "New Zealand",
    "Turkey",
    "Hungary",
    "Pakistan",
    "Norway",
    "Cuba",
    "Serbia",
    "Ghana",
    "South Korea",
    "Ireland",
    "Saudi Arabia",
    "Ecuador",
    "Romania",
    "Uzbekistan",
    "Jordan",
    "Tunisia",
    "Kazakhstan",
    "Israel",
    "Cameroon",
    "Singapore",
];

function getFirstTenCountries(countries) {
    return countries.slice(0, 10);
}

function getLastTenCountries(countries) {
    return countries.slice(-10);
}

console.log(getFirstTenCountries(countries));
console.log(getLastTenCountries(countries));
