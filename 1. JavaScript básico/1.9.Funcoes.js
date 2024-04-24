// Criando uma função que soma dois números
function soma(x = 1, y = 2) { // No caso, declaramos os parâmetros e caso não recebam valores, setamos um default
const resultado = x + y // Criação de uma const pra armazenar o resultado
return resultado // Função retorna o resultado
}

const frigir = soma(9, 1) // Atribuir o valor da função à const criada
console.log(frigir) // Exibir o valor da const atribuído pela função


function familyMember(nome, sobrenome, idade){ // Criação de uma function factory que cria objetos
    return {nome, sobrenome, idade}; // Retorna os parâmetros inseridos
}

const pai = familyMember('Enzo', 'Roberto', 60);
const mae = familyMember('Claudia', 'Galli', 54);
const maisVelho = familyMember('Jonathan', 'Roberto', 29);
const doMeio = familyMember('Pietra', 'Renata', 27);
const oCacula = familyMember('Vincenzo', 'Roberto', 26);

console.log(pai.nome, maisVelho.idade) // Exibir parâmetros específicos dos objetos

// function multiply (x = 1, y = 1) { // Utilizando uma const com return
//     const result = x * y;
//     return result;
// };

function multiply (x = 1, y = 1) { // Maneira clean code, apenas com return
    return x * y;
};

const getResult = multiply (3,5); // Atribuindo o valor a uma const
console.log (getResult); // Exibindo o valor da const

// function root (n = 9) { // Função de raiz quadrada
//     return n ** 0.5;
// };

// const root = function (n = 9) { // Criando uma função anônima
//     return n ** 0.5;
// };

const root = (n = 9) => n ** 0.5; // Criando uma arrow function
console.log (root(25)); // Exibindo o resultado da função passando um parâmetro

// const root = (n = 9) => console.log(n ** 0.5); // Embutindo a exibição na arrow function
// root(25) // Chamamos a função apenas com o parâmetro

function salve (nome) {
    return `Olá, ${nome}!`
}

console.log(salve('Jonathan'))