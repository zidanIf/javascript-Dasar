// PENGGUNAAN LOOPING PADA ARRAY
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
angka.forEach(function (i) {
  console.log(i);
});

// penggunnaan map pada array
const angka2 = [10, 12, 15, 17, 19];
const angka3 = angka2.map(function (e) {
  return e + 3;
});
console.log(angka3);

// latihan map pada array
const jmlhBarang = [2, 3, 4, 5, 6, 7, 8, 9];
const jmlhBarang20 = jmlhBarang.map(function (i) {
  return i * 20;
});
console.log(jmlhBarang20);

// sort pada aray berfungsi mengurutkan angka
var totalAngka = [1, 3, 2, 5, 15, 20, 7];
totalAngka.sort(function (a, b) {
  return a - b;
});
console.log(totalAngka.join("-"));
