const data = new Date();
const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const diaSemana = diasSemana[data.getDay()];
const horaAtual = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);