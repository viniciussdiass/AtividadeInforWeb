function ultimosElementos(arr, n) {
  return arr.slice(-n);
}

const numeros = [10, 58, 68, 88, 25, 45];
console.log(ultimosElementos(numeros, 3));
