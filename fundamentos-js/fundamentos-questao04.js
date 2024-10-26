function verificaNumeros(a, b) {
  return a === 30 || b === 30 || (a + b === 30) || (a === 12 && b === 12);
}

console.log(verificaNumeros(15, 15)); // true
console.log(verificaNumeros(30, 5));  // true
console.log(verificaNumeros(12, 12)); // true
