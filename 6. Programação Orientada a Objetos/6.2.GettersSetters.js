class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.speed = 0
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this.speed = valor
    }

    get velocidade() {
        return this.speed
    }

    acelerar() {
        if (this.speed >= 100) return
        this.speed += 10
    }

    freiar() {
        if (this.speed <= 0) return
        this.speed -= 10
    }
}

const carro = new Carro('Fusca', 'Volkswagen', 1970)

for (let i = 0; i <= 10; i++) {
    carro.acelerar();
}


console.log(carro.velocidade)

// carro.velocidade = 1000 // Para evitar que estoure o limite definido, criar setter para limitar a atribuição até 100
// console.log(carro.velocidade)