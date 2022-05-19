// menggunakan filter pada array(mengembalikan lebih dari 1 nilai)
const angka = [1, 2, 3, 4, 12, 15, 17];
const angka2 = angka.filter(function (y) {
  return y > 2;
});
console.log(angka2.join("-"));

const barang = [1, 3, 5, 4, 2, 7, 8, 9, 0];
const barang2 = barang.find(function (z) {
  return z > 7;
});
console.log(barang2);
