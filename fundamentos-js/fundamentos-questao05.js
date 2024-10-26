function checarNumeros(a, b, c) {
  if ((a >= 50 && a <= 99) && (b >= 50 && b <= 99) && (c >= 50 && c <= 99)) {
    console.log("Sucesso");
  } else {
    console.log("Erro");
  }
}

checarNumeros(60, 70, 80);  // Sucesso
checarNumeros(40, 60, 80);  // Erro
