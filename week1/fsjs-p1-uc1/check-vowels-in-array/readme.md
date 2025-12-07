# Check Vowels in Array

Kerjakan meggunakan function, ikuti requirement soal pada gdrive phase 1.

Check Vowels in Array
Learning Competencies

-   Mengimplementasikan JavaScript untuk memecahkan masalah.
-   Mampu memecahkan masalah didalam nested array

Summary
Kamu diminta untuk membuat program yang berfungsi untuk mencari sekelompok string yang isinya berupa hanya huruf vokal pada array 2 dimensi dengan ukuran 5x3. Adapun ukuran kelompok string yang dicari merupakan sub-array berukuran 2x2 dari array yang diberikan. Tugas kamu adalah mencari tahu berapa banyak blok berukuran 2x2 yang ditemukan

```js
A I B S D
U E C T Y
O A T B J
```

Contoh pada tabel diatas, program kamu akan mengembalikan 2 karena terdapat 2 blok yang berisikan huruf vokal semuanya.

Release 0: Generate Board

Buat sebuah function yang dapat menerima 2 input integer berupa jumlah row dan jumlah column, setelah itu men-generate array 2 dimensi dengan jumlah row dan column sesuai yang di-input dan berisi random alphabet.

Contoh :
jumlah Row: 5, jumlah Col: 4

```js
[
    ["A", "X", "C", "Y"],
    ["E", "O", "O", "S"],
    ["I", "U", "I", "N"],
    ["M", "Y", "O", "E"],
    ["P", "D", "A", "I"],
];
```

Release 1: Get Block Filled with Vowels

Buat sebuah function yang mengecek ada berapa block (block adalah array yang memiliki row 2, col 2) yang isinya semuanya huruf vowel.

Pada contoh di atas, ada 3 block, block pertama berisi : E,O,U,I..blok kedua berisi O,O,I,U.. blok ketiga berisi O,E,I,A

Output : 3 (angka)

Selamat Mengerjakan
