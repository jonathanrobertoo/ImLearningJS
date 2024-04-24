const somados = (x, y) => x + y // Arrow function
console.log(somados(2,2))

const comunica = {
    falar() {
        console.log('Estou falando...')
    }
}
comunica.falar()

function funcao() {
    console.log(arguments[2])
}

funcao('Valor', 1, 202, 34567, true) // Valores passados para um função sem parâmetros são armazenados em 'arguments'


// Utilizando arguments em uma função que soma os números
function usaArguments(parametro) {
    let total = 0
    for (let argument of arguments) {
        total += argument
    }

    console.log(total, parametro)
}
usaArguments(1, 2, 3, 4, 5, 6, 7)


function somadores(a = 1, b = 5, c = 10) {
    console.log(a + b + c)
}

somadores(5, undefined, 1) // Passar undefined para que seja setado o valor padrão

// Função desestrutora

function desestrObj({ nome, sobrenome, idade }) {
    console.log({ nome, sobrenome, idade })
}

let obj = { nome: 'Vincenzo', sobrenome: 'Roberto', idade: 25 }
desestrObj(obj)

function desestrArr([ val1, val2, val3 ]) {
    console.log([ val1, val2, val3 ])
}

desestrArr(['Pietra', 'Renata', 26 ])

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }

    console.log(acumulador)
}

conta ('+', 0, 20, 40, 60, 80)