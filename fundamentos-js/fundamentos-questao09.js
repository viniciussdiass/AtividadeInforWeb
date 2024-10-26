function somaTamanhos(frase) {
  return frase.split(' ').reduce((total, palavra) => total + palavra.length, 0);
}

console.log(somaTamanhos("O ontem, o hoje e o amanhã não se sucedem, mas estão conectados em um círculo infinito."));
