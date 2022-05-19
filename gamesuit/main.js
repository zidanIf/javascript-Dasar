// menangkap layar
var tanya = true;
while (tanya) {
  var p = prompt("pilih : gajah,semut,orang : ");
  //   membangkitkan bilangan random pada komputer
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  //   hasil
  var hasil = " ";
  if (p == comp) {
    hasil = "seri";
  } else if (p == "gajah") {
    hasil = (comp = "orang") ? "menang" : "kalah";
  } else if (p == "orang") {
    hasil = (comp = "gajah") ? "menang" : "kalah";
  } else if (p == "semut") {
    hasil = (comp = "orang") ? "menang" : "kalah";
  } else {
    hasil = "memasukan pilihan yang salah";
  }

  alert("kamu memilih: " + p + "dan komputer memilih : " + comp + " \nmaka hasilnya : kamu" + hasil);
  tanya = confirm("lagi");
}
alert("terimakasih");
