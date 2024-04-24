// Return retorna um valor e termina a função

function subtrai(a, b) {
    return a - b
}
console.log(subtrai(16, 8)) // Exibe o retorno da função

function soma(c, d) {
    console.log(c + d)
}
soma(6, 18) // Nada é retornado, pois console.log apenas exibe o resultado

// Factory
function folkGenerator (name, surname) {
    return {name, surname}
}

const folk1 = folkGenerator('Jonathan', 'Roberto') // Criação de objeto por instância da factory
const folk12 = { // Possui o mesmo princípio da linha acima, porém não é feito por uma função
    name: 'Johnny',
    surname: 'Roberts'
}
const folk2 = folkGenerator('Daniele', 'Pavesi')

// Exibindo atributos específicos dos objetos criados
console.log(folk1.name, folk1.surname)
console.log(folk2.name, folk2.surname)
console.log(folk12.name, folk12.surname)


// Criação de uma função que retorna outra função
function speaker(begin) {
    function speakerHalf(finish) {
        return `${begin} ${finish}`
    }
    return speakerHalf
}

// Nesse caso, a variável assume o papel de função pelo valor atribuído
const speaking = speaker('Hello,')
console.log(speaking('World!'))

// Utilidade de uma função chama outra função para atribuir valor
function multiplyGenerator(multiplies) {
    return function (n) {
        return multiplies * n
    }
}

// Atribuição da função retornada às variáveis, passando parâmetros correspondentes
const double = multiplyGenerator(2) // multiplies recebe o valor 2 e retorna (2 * n)
const triple = multiplyGenerator(3)
const poker = multiplyGenerator(4)

// Chamando a variável que recebeu a função, passando um parâmetro
console.log(double(3)) // função anônima atribui 3 a n e retorna (2 * 3)
console.log(triple(2))
console.log(poker(4))

