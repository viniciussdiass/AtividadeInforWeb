function elevarESomar(arr) {
  return arr.reduce((total, num) => total + Math.pow(num, 3), 0);
}

const numeros = [2, 3, 4];
console.log(elevarESomar(numeros));
