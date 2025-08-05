const countries = [
    {
        name: "Thailand",
        capital: "Bangkok",
        languages: ["Thai", "Melayu"],
        population: 65327652,
        flag: "https://restcountries.eu/data/tha.svg",
        currency: "Baht",
    },
    {
        name: "Afghanistan",
        capital: "Kabul",
        languages: ["Pashto", "Uzbek", "Turkmen", "English"],
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
        languages: ["Norwegian", "Sami", "English"],
        population: 5223256,
        flag: "https://restcountries.eu/data/nor.svg",
        currency: "Norwegian krone",
    },
    {
        name: "Åland Islands",
        capital: "Mariehamn",
        languages: ["Swedish", "English"],
        population: 28875,
        flag: "https://restcountries.eu/data/ala.svg",
        currency: "Euro",
    },
    {
        name: "Mexico",
        capital: "Mexico City",
        languages: ["Spanish", "English"],
        population: 122273473,
        flag: "https://restcountries.eu/data/mex.svg",
        currency: "Mexican peso",
    },

    {
        name: "Portugal",
        capital: "Lisbon",
        languages: ["Portuguese", "Melayu"],
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
        languages: ["Japanese", "Melayu"],
        population: 126960000,
        flag: "https://restcountries.eu/data/jpn.svg",
        currency: "Japanese yen",
    },

    {
        name: "South Korea",
        capital: "Seoul",
        languages: ["Korean", "Melayu"],
        population: 51446201,
        flag: "https://restcountries.eu/data/kor.svg",
        currency: "South Korean won",
    },
    {
        name: "Morocco",
        capital: "Rabat",
        languages: ["Arabic", "Melayu"],
        population: 33337529,
        flag: "https://restcountries.eu/data/mar.svg",
        currency: "Moroccan dirham",
    },
];

//* 3
const sortByCountry = countries.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByCountry);

const sortByCapital = countries.sort((a, b) =>
    a.capital.localeCompare(b.capital)
);
console.log(sortByCapital);

const sortByPopulation = countries.sort((a, b) => b.population - a.population);
console.log(sortByPopulation);

//* 4

function fiveFamousLanguage(countries) {
    const languageCount = {};
    countries.forEach((country) => {
        country.languages.forEach((language) => {
            languageCount[language] = (languageCount[language] || 0) + 1;
            // if (!languageCount[language]) {
            //     languageCount[language] = 0;
            // }
            // languageCount[language]++;
        });
    });

    const sortFamsLang = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    return sortFamsLang.map(([language, frekuensi]) => ({
        language,
        frekuensi,
    }));
}
console.log(fiveFamousLanguage(countries));

//* 5

const topFivePopulation = sortByPopulation
    .slice(0, 5)
    .map(({ name, population }) => ({
        name,
        population,
    }));
console.table(topFivePopulation);

module.exports = countries;
