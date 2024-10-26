function modificarFrase(frase) {
  return frase.split(' ').map(palavra => {
    return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
  }).join(' ');
}

console.log(modificarFrase("O ontem, o hoje e o amanhã não se sucedem, mas estão conectados em um círculo infinito."));
