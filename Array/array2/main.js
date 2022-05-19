// latihan splice and slice

const namaBarang = ["speaker", "monitor", "keyboard", "mouse", "Tab", "cpu"];
console.log("splice");
// rumus Splice: (mau ditambahkan sebelah mana,mau hapus brp,element baru)
namaBarang.splice(2, 2, "handphone");
console.log(namaBarang.join(" "));

// rumus Slice: (mau diambil array yang mana,akhir dikurangi 1)
const kumpulanBarang = ["buku", "kipas angin", "pensil", "pulpen", "penggaris"];
const kumpulanBarang2 = kumpulanBarang.slice(0, 3);
console.log(kumpulanBarang.join(" "));
console.log(kumpulanBarang2.join(" "));
// slice menghasilkan array yang baru

// join pada array
// mengubah obset pada defaul ,menjadi array
const bahasa = ["indonesia", "inggris", "filipina", "jancok"];
console.log(bahasa.join(" "));

const bebas = ["kaleng", "toples", "nastar", "jancok"];
for (i = 0; i < bebas.length; i++) {
  console.log("ini adalah benda" + " " + bebas[i]);
}
