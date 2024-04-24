/* Jonathan Roberto tem 28 anos. Pesa 84 kg.
Tem 1.78 m de altura e seu IMC é...
Jonathan nasceu em 1995.
*/

const nome = 'Jonathan';
const sobrenome = 'Roberto';
const idadeEmAnos = '28';
const pesoEmKg = 84;
const alturaEmMetros = 1.78;
const anoAtual = 2023;
let indiceMassaCorporal = peso / (altura * 2);
let anoNascimento = anoAtual - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idadeEmAnos} anos. Pesa ${pesoEmKg} Kg`);
console.log(``)