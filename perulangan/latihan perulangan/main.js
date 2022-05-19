var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

// while
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + "beroprasi dengan baik");
  noAngkot++;
}
// for
for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No " + noAngkot + "sedang tidak beroprasi");
}
