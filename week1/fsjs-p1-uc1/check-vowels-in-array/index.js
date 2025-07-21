function generateArray(row, col) {
    //* manual
    let dictionary = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let result = [];
    for (let i = 0; i < row; i++) {
        let tempArr = [];
        for (let j = 0; j < col; j++) {
            let indexDict = Math.floor(Math.random() * 26);
            let randomAlfabet = dictionary[indexDict];
            tempArr.push(randomAlfabet);
        }
        result.push(tempArr);
    }
    return result;

    //* build in function Array.from()
    return Array.from({ length: row }, () =>
        Array.from(
            { length: col },
            () => dictionary[Math.floor(Math.random() * 26)]
        )
    );
}

// console.log(arrAlfabet, "line 21");
//* helping function for function countBlockVowel
function isBlockVowel(block) {}
// console.log(isBlockVowel(["A", "I", "E", "O"]));
// console.log(isBlockVowel(["A", "O", "E", "O"]));
// console.log(isBlockVowel(["A", "J", "E", "O"]));

function countBlockVowel(board) {
    // console.log(board, "line 31");
}

function checkVowelBlock(row, col) {
    let arrAlfabet = generateArray(row, col);
    console.log(arrAlfabet);
    // let hasilCountBlockVowel = countBlockVowel(arrAlfabet);
    // return hasilCountBlockVowel;
}

let arrExample = [
    ["A", "X", "C", "Y"],
    ["E", "O", "O", "S"],
    ["I", "U", "I", "N"],
    ["M", "Y", "O", "E"],
    ["P", "D", "A", "I"],
];

let [...input] = process.argv.slice(2);
let row = +input[0];
let col = +input[1];
// console.log(row, col, "from process.argv");
console.log(checkVowelBlock(row, col));
//testcase example
console.log(checkVowelBlock(5, 4));
// console.log(countBlockVowel(arrExample));

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
