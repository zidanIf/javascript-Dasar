// // latihan angkot 2
var jumlhAngkot = 10;
for (noAngkot = 1; noAngkot <= jumlhAngkot; noAngkot++) {
  if (noAngkot <= 7) {
    console.log("angkot No" + noAngkot + "beroprasi dengan baik");
  } else if (noAngkot == 8) {
    console.log("angkot No" + noAngkot + " sedang lembur");
  } else {
    console.log("angkot No" + noAngkot + " sedang TIDAK BEROPRASI");
  }
}
