function satu() {
    console.log ("satu");
}
function dua() {
    console.log ("fungsi dua mau di eksekusi.....");
    setTimeout(() => {
        console.log("dua");
}, 2);
}

function tiga() {
    console.log ("tiga");
}
satu();
dua();
tiga();