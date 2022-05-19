// function construcktor
function JuraganAngkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namapenumpang) {
    this.penumpang.push(namapenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namapenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log("penumpang kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namapenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}
const sopir1 = new JuraganAngkot("zidan", ["padang", "pondok gede"], [], 0);
const sopir2 = new JuraganAngkot("aan", ["dang", "dokde"], [], 0);
