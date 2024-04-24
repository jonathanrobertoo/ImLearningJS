// function retornaMaior(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// function retornaMaior(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } return num2;
// }

// function retornaMaior(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

const retornaMaior = (num1, num2) => (num1 > num2) ? num1 : num2;

console.log(retornaMaior(5, 6))

// Todas as maneiras funcionam, mas em questão de melhoria e tornar o código menos verboso, podemos fazer dessa maneira.

/* const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000) {
    console.log(`Usuário VIP`);
} else {
    console.log(`Usuário normal`);
}
*/

const pontuacaoUsuario = 999.99999999999999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Usuário VIP` : `Usuário normal`;

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);