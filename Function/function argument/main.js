// function arguments
function tambah() {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var tampilkan = tambah(2, 3, 5, 7, 120);
alert(tampilkan);

// function arguments

function akhir() {
  var angka = 0;
  for (i = 0; i < arguments.length; i++) {
    angka += arguments[i];
  }
  return angka;
}
var hasil = akhir(2, 4, 5);
console.log(hasil);
