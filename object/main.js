// object literal
let mhs = {
  nama: "zidan ishan fauzi",
  no: "789546",
  jurusan: "Teknik informatika",
};
let mhs2 = {
  nama: "zidanfauzi",
  no: "789546",
  jurusan: "Teknik informatika",
};
let mhs3 = {
  nama: "deden",
  no: "7896",
  email: "deden@gmail.com",
};

// function declaration
function objectmanusia(nama, umur) {
  let manusia = {};
  manusia.nama = nama;
  manusia.umur = umur;
  return manusia;
}

let manusia1 = objectmanusia("zidan", 19);
let manusia2 = objectmanusia("idan", 14);
let manusia3 = objectmanusia("dan", 16);
let manusia4 = objectmanusia("aan", 9);

function barang(nama, jenis) {
  let barang = {};
  barang.nama = nama;
  barang.jenis = jenis;
  return barang;
}
let barang1 = barang("panci", "padat");

// function constractor

function Mahasiswa(nama, benda) {
  this.nama = nama;
  this.benda = benda;
}
const mhs7 = new Mahasiswa("erik", "kujang");

function Teknologi(web, cyber) {
  this.web = web;
  this.cyber = cyber;
}
const it = new Teknologi("javascript", "python");
