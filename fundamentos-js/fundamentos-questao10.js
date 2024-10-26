function converterNome(nomeCompleto) {
  const nomes = nomeCompleto.split(' ');
  const primeiroNome = nomes.shift();
  const iniciais = nomes.map(nome => `${nome[0].toUpperCase()}.`).reverse();
  return [...iniciais, primeiroNome].join(' ');
}

console.log(converterNome("Alan Mathison Turing"));
