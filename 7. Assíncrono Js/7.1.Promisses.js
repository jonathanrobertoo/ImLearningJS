function assincrono(Valor = 'Valor não reconhecido', Tempo = 2000) {

    const execution = Tempo

    return new Promise((resolve, reject) => {

        if (typeof Tempo !== 'number') reject(new Error('Valor não aceito. Digite um número, por favor.'))
        if (typeof Valor !== 'string') reject(new Error('Valor não aceito. Digite uma string, por favor.'))

        setTimeout(() => {
            resolve(Valor)
        }, execution)
    })
}

assincrono('Conectando ao banco de dados...', 2000)
    .then(Valor1 => {
        console.log(Valor1)
        return assincrono('Conexão bem sucedida.', 1500)
    })
    .then(Valor2 => {
        console.log(Valor2)
        return assincrono('Tratando dados...', 5000)
    })
    .then(Valor3 => {
        console.log(Valor3)
        return assincrono('Dados retornados com sucesso.')
    })
    .then(Valor4 => {
        console.log(Valor4)
    })
    .catch(erro => {
        console.log(erro)
    })

console.log('Primeiro a ser exibido, pois não depende de sincronicidade.')

