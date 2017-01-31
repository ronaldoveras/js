var a = 10;
let b = 20;

if (true) {
  var c = 30;
  let d = 40;
  const e = 50;
}
console.log(a); // saída 10
console.log(b); // saída 20
console.log(c); // saída 30
console.log(d); // erro de referência (ReferenceError)
console.log(e); // erro de referência (ReferenceError)