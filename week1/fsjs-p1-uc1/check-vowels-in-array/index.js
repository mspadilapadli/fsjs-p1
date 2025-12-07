function generateArray(row, col) {
    //* manual
    let dictionary = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    // let result = [];
    // for (let i = 0; i < row; i++) {
    //     let tempArr = [];
    //     for (let j = 0; j < col; j++) {
    //         let indexDict = Math.floor(Math.random() * 26);g
    //         let randomAlfabet = dictionary[indexDict];
    //         tempArr.push(randomAlfabet);
    //     }
    //     result.push(tempArr);
    // }
    // return result;

    //* mau coba nested forEach ? untuk tast case ini for sudah paling optimal , jika ingin menggunakan forEach, maka harus buat array kosong dulu untuk aksesnya -> Array.from({length: row}).forEach(()=>{....})

    //* build in function Array.from()
    // return Array.from({ length: row }, () =>
    //     Array.from(
    //         { length: col },
    //         () => dictionary[Math.floor(Math.random() * dictionary.length)]
    //     )
    // );
}

//* one linver ASCII alfabet
const generateArray = (row, col) =>
    Array.from({ length: row }, () =>
        Array.from(
            { length: col },
            () => String.fromCharCode(Math.floor(Math.random() * 26) + 65) //ASCII alfabet
        )
    );

console.log(generateArray(5, 4));
//* helping function for function countBlockVowel
function isBlockVowel(block) {
    return block.every((char) => "AIUEO".includes(char));
}
// console.log(isBlockVowel(["A", "I", "E", "O"]));
// console.log(isBlockVowel(["A", "O", "E", "O"]));
// console.log(isBlockVowel(["A", "J", "E", "O"]));

function countBlockVowel(board) {
    // console.log(board, "line 31");
    let countVowel = 0;

    for (let i = 0; i < board.length - 1; i++) {
        const row = board[i];
        for (let j = 0; j < row.length - 1; j++) {
            const char = row[j];
            let blockVowel = [
                board[i][j],
                board[i][j + 1],
                board[i + 1][j],
                board[i + 1][j + 1],
            ];
            //* use helping function isBlockVowel
            if (isBlockVowel(blockVowel)) {
                countVowel++;
            }

            //* use direct compare
            // if (blockVowel.every((char) => "AIUEO".includes(char))) {
            //     countVowel++;
            // }
        }
    }

    return countVowel;
}

function checkVowelBlock(row, col) {
    let arrAlfabet = generateArray(+row, +col);
    return (countBlock = countBlockVowel(arrAlfabet));
}

let arrExample = [
    ["A", "X", "C", "Y"],
    ["E", "O", "O", "S"],
    ["I", "U", "I", "N"],
    ["M", "Y", "O", "E"],
    ["P", "D", "A", "I"],
];

let [...input] = process.argv.slice(2);
let [row, col] = input;

// console.log(+row, +col, "from process.argv");
console.log(checkVowelBlock(row, col));
//testcase example
console.log(checkVowelBlock(5, 4));
console.log(countBlockVowel(arrExample));

//prosess ARGV
// console.log(process.argv);
// let row = +process.argv[2];
// console.log(row, "<<< row input index2");
// let col = +process.argv[3];
// console.log(col, "<<< col input index3");

// let [commad, path, ...data] = process.argv;
// console.log(commad, "      <<< index0 process.argv");
// console.log(path, "       <<< index1 process.argv");
// console.log(...data, "  <<< index seterusnya process.argv");
