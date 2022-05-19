// penggunaan push,pop,unshift,shift

// push
const kumpulanNama = ["zidan", "ihsan", "belajar", "javascript", "pada", "array"];

// ("push")  menambahkan string diakhir kalimat
console.log("push");

kumpulanNama.push("fauzi", ".Skom");
console.log(kumpulanNama.join(" "));

// ("pop") menghapus string diakhir kalimat
console.log("pop");

kumpulanNama.pop();
console.log(kumpulanNama.join(" "));

// ("unshift") menambahkan string di awal kalimat
console.log("unshift");

kumpulanNama.unshift("Muhammad");
console.log(kumpulanNama.join(" "));

// ("shift") menghapus string di akhir kalimat
console.log("shift");

kumpulanNama.shift();
console.log(kumpulanNama.join(" "));
