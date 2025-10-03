const cantidad = 5;

for (let i = 1; i <= cantidad; i++) {
  let caracter = "*";
  let result = caracter.repeat(i);
  console.log(result);
}

console.log("--------------------------");

for (let i = cantidad; i >= 1; i--) {
  let texto = "";
  for (let j = 1; j <= i; j++) {
    texto = texto + "*";
  }
  console.log(texto);
}

console.log("--------------------------");

for (let i = 1; i <= cantidad; i++) {
    if (i == 1 || i == cantidad) {
        let texto = "";
        for (let j = 1; j <= cantidad; j++) {
            texto = texto + "*";
        }
        console.log(texto);
    }
    if (i > 1 || i < cantidad) {
        let texto = "";
        for (let j = 1; j <= cantidad; j++) {
            if (j == 1 || j == cantidad) {
                texto = texto + "*";
            }
            for (let k = 1; k <= cantidad; k++) {
                texto = texto + "*";
            }
        }
        console.log(texto);
    }
}
// *****
// *   *
// *   *
// *   *
// *****