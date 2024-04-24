let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA);
console.log(varB);
console.log(varC);

const varATemporaria = varA; // Criar uma variável temporária pra que o valor de A não seja perdido no fluxo
varA = varB;
varB = varC;
varC = varATemporaria // Dessa maneira, quando varA receber varB, teremos o antigo valor armazenado em varATemporaria]

console.log(varA);
console.log(varB);
console.log(varC);

/* Também é possível redistribuir os valores:

[varA, varB, varC] = [varB, varC, varA]

*/