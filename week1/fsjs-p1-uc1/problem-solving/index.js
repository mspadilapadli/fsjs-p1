let startDate = 7;
let endDate = 31;

let members = {
    Tono: 2,
    Anton: 4,
    Budi: 5,
};
// for (let i = startDate; i <= endDate; i++) {
//     let date = i;
//     if (date % 5 == 0) {
//         console.log("Tempat Fitness Tutup");
//     } else {
//         let visited = [];
//         for (const key in members) {
//             const el = members[key];
//             if (i == startDate || (i - startDate) % el == 0) {
//                 visited.push(key);
//             }
//         }
//         console.log(`Tanggal ${date} : ${visited.join(", ")} `);
//     }
// }

//* continue, filter() & map()

const memberss = [
    { name: "Tono", interval: 2 },
    { name: "Anton", interval: 4 },
    { name: "Budi", interval: 5 },
];

for (let date = startDate; date <= endDate; date++) {
    if (date % 5 == 0) {
        console.log(`Tanggal ${date}: Tempat Fitness Tutup`);
        continue; // langsung skip ke tanggal berikutnya
    }
    const visited = memberss
        .filter(({ interval }) => (date - startDate) % interval == 0)
        .map(({ name }) => name);

    console.log(`Tanggal ${date}: ${visited.length ? visited.join(", ") : ""}`);
}

//!=========================================================================
