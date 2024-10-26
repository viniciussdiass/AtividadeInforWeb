function ordenarNumeros(arr) {
  return arr.sort((a, b) => a - b);
}

const numeros = [5, 2, 9, 1, 5, 6];
console.log(ordenarNumeros(numeros));
