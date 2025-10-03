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
