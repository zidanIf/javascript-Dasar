// function rekursif
function bilanganAngka(n) {
  if (n === 100) return; /*base case*/
  console.log(n);
  return bilanganAngka(n + 1);
}
bilanganAngka(1);

// function rekursi
function urutAngka(e) {
  if (e === 20) return;
  console.log(e);
  return urutAngka(e + 1);
}
urutAngka(0);

//
