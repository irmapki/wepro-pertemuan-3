function satu() {
    console.log("satu");
}

async function dua() {
    console.log("fungsi dua mau di eksekusi.....");
    // Membuat Promise untuk menunda selama 2 milidetik
    await new Promise(resolve => setTimeout(resolve, 2));
    console.log("dua");
}

function tiga() {
    console.log("tiga");
}

// Fungsi utama untuk menjalankan fungsi secara berurutan
async function main() {
    satu();
    await dua(); // Menunggu fungsi dua selesai
    tiga();
}

main();
