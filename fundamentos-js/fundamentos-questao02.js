function areaTriangulo(lado1, lado2, lado3) {
  const s = (lado1 + lado2 + lado3) / 2;
  return Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
}

const lado1 = 3;
const lado2 = 4;
const lado3 = 5;

console.log(`Área do triângulo: ${areaTriangulo(lado1, lado2, lado3)}`);
