// "Pausa" o código (lazy evaluation)

function* geradora1() {
    // Primeira chamada retornará o valor abaixo
    yield 'Valor 1'

    // Segunda chamada retornará o valor abaixo
    yield 'Valor 2'

    // Terceira chamada retornará o valor abaixo
    yield 'Valor 3'
}

const g1 = geradora1()
console.log(g1)
console.log(g1.next()) // Função intrinseca next, possui dois valores: Value (atribuído) e done: False/True

// Chamando a função quatro vezes para gerar done: True

console.log(g1.next().value) // Exibindo apenas o valor da segunda chamada
console.log(g1.next()) // Exibição da terceira chamada, a última done: False
console.log(g1.next()) // Após a chamada do último yield, done: True