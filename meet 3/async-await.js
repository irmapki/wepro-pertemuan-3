// function satu() {
//     console.log("satu");
// }

// async function dua() {
//     console.log("fungsi dua mau di eksekusi.....");
//     // Membuat Promise untuk menunda selama 2 milidetik
//     await new Promise(resolve => setTimeout(resolve, 2));
//     console.log("dua");
// }

// function tiga() {
//     console.log("tiga");
// }

// // Fungsi utama untuk menjalankan fungsi secara berurutan
// async function main() {
//     satu();
//     await dua(); // Menunggu fungsi dua selesai
//     tiga();
// }

// main();
function sarapan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sarapan = true; // Simulasi keputusan

            if (sarapan) {
                resolve("Saya sarapan bersama adik");
            } else {
                reject("I DID NOT BREAKFAST");
            }
        }, 1500);
    });
}

function menyapu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const menyapu = true; // Simulasi keputusan

            if (menyapu) {
                resolve("Saya menyapu");
            } else {
                reject("Saya tidak menyapu");
            }
        }, 2500);
    });
}

async function doChores() {
    try {
        const sarapanResult = await sarapan(); // Perbaiki nama variabel
        console.log(sarapanResult); // Gunakan nama variabel yang benar

        const menyapuResult = await menyapu(); // Perbaiki nama variabel
        console.log(menyapuResult); // Gunakan nama variabel yang benar

        console.log("You finished all the chores!");
    } catch (error) {
        console.error(error);
    }
}

doChores();