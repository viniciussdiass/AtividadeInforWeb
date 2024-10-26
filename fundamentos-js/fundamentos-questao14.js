function palavraPresente(frase, palavra) {
  console.log('ops');
  return frase.includes(palavra);
}

console.log(palavraPresente("Esta é uma frase de exemplo", "exemplo"));  // true
console.log(palavraPresente("Esta é uma frase de exemplo", "test"));     // false
