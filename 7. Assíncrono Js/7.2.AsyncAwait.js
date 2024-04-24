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

async function exec() {
    try {
        const etapa1 = await assincrono('Conectando ao Banco de Dados...', 1000)
        console.log(etapa1)

        const etapa2 = await assincrono('Conexão bem sucedida!', 7000)
        console.log(etapa2)

        const etapa3 = await assincrono('Tratando dados...', '3000')
        console.log(etapa3)

        const etapa4 = await assincrono('Dados retornados com sucesso!', 10000)
        console.log(etapa4)
    } catch (erro) {
        console.log(erro)
    }
}

exec()

console.log('Requisição recebida.')

