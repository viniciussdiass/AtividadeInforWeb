function numeroMaisFrequente(arr) {
  const contagem = {};
  let maxNumero = arr[0], maxContagem = 1;

  for (const num of arr) {
    contagem[num] = (contagem[num] || 0) + 1;
    if (contagem[num] > maxContagem) {
      maxNumero = num;
      maxContagem = contagem[num];
    }
  }
  
  return maxNumero;
}

const numeros = [1, 2, 2, 3, 4, 2, 5, 3, 3];
console.log(`Número mais frequente: ${numeroMaisFrequente(numeros)}`);
