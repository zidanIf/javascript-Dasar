var item = prompt("masukan nama makanan/minuman: \n (cth: nasi,es crim,daging,bakpia,air putih,burger,permen");

switch (item) {
  case "daging":
  case "nasi":
  case "bakpia":
  case "air putih":
    alert("makanan ini sehat");
    break;
  case "burger":
  case "permen":
  case "es crim":
    alert("makanan ini tidak sehat");
    break;
  default: {
    alert("error");
    break;
  }
}
