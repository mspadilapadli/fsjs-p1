function beli(uang, objItem, cb) {
    console.log(`Membeli ${objItem.item} seharga Rp${objItem.harga}...`);

    setTimeout(() => {
        if (uang >= objItem.harga) {
            const kembalian = uang - objItem.harga;
            console.log(
                `✅ Berhasil membeli ${objItem.item}. Sisa uang: Rp${kembalian}`
            );
            cb(kembalian);
        } else {
            console.log(`❌ Uang tidak cukup untuk membeli ${objItem.item}.`);
            cb(uang); // Kembalikan uang tanpa perubahan
        }
    }, objItem.waktu);
}

// Proses belanja berurutan (5x)
const uangAwal = 15_000;

beli(uangAwal, { item: "Permen", harga: 5000, waktu: 1000 }, (sisa1) => {
    beli(sisa1, { item: "Roti", harga: 10000, waktu: 1000 }, (sisa2) => {
        beli(sisa2, { item: "Susu", harga: 8000, waktu: 1000 }, (sisa3) => {
            beli(
                sisa3,
                { item: "Buku", harga: 12000, waktu: 1000 },
                (sisa4) => {
                    beli(
                        sisa4,
                        { item: "Pulpen", harga: 3000, waktu: 1000 },
                        (sisa5) => {
                            console.log(
                                `💰 Proses belanja selesai. Uang tersisa: Rp${sisa5}`
                            );
                        }
                    );
                }
            );
        });
    });
});
