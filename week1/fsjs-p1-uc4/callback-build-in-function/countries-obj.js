const countries = [
    {
        name: "Thailand",
        capital: "Bangkok",
        languages: ["Thai"],
        population: 65327652,
        flag: "https://restcountries.eu/data/tha.svg",
        currency: "Baht",
    },
    {
        name: "Afghanistan",
        capital: "Kabul",
        languages: ["Pashto", "Uzbek", "Turkmen"],
        population: 27657145,
        flag: "https://restcountries.eu/data/afg.svg",
        currency: "Afghan afghani",
    },
    {
        name: "Kenya",
        capital: "Nairobi",
        languages: ["English", "Swahili"],
        population: 47251000,
        flag: "https://restcountries.eu/data/ken.svg",
        currency: "Kenyan shilling",
    },
    {
        name: "Norway",
        capital: "Oslo",
        languages: ["Norwegian", "Sami"],
        population: 5223256,
        flag: "https://restcountries.eu/data/nor.svg",
        currency: "Norwegian krone",
    },
    {
        name: "Åland Islands",
        capital: "Mariehamn",
        languages: ["Swedish"],
        population: 28875,
        flag: "https://restcountries.eu/data/ala.svg",
        currency: "Euro",
    },
    {
        name: "Mexico",
        capital: "Mexico City",
        languages: ["Spanish"],
        population: 122273473,
        flag: "https://restcountries.eu/data/mex.svg",
        currency: "Mexican peso",
    },

    {
        name: "Portugal",
        capital: "Lisbon",
        languages: ["Portuguese"],
        population: 10374822,
        flag: "https://restcountries.eu/data/prt.svg",
        currency: "Euro",
    },
    {
        name: "Brazil",
        capital: "Brasília",
        languages: ["Portuguese"],
        population: 207353391,
        flag: "https://restcountries.eu/data/bra.svg",
        currency: "Brazilian real",
    },
    {
        name: "Japan",
        capital: "Tokyo",
        languages: ["Japanese"],
        population: 126960000,
        flag: "https://restcountries.eu/data/jpn.svg",
        currency: "Japanese yen",
    },

    {
        name: "South Korea",
        capital: "Seoul",
        languages: ["Korean"],
        population: 51446201,
        flag: "https://restcountries.eu/data/kor.svg",
        currency: "South Korean won",
    },
    {
        name: "Morocco",
        capital: "Rabat",
        languages: ["Arabic"],
        population: 33337529,
        flag: "https://restcountries.eu/data/mar.svg",
        currency: "Moroccan dirham",
    },
];

const sortByCountry = countries.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByCountry);

const sortByCapital = countries.sort((a, b) =>
    a.capital.localeCompare(b.capital)
);
console.log(sortByCapital);

const sortByPopulation = countries.sort((a, b) => a.population - b.population);
console.log(sortByPopulation);

module.exports = countries;
