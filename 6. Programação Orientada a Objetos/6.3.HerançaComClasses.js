const { type } = require("os")

class Eletronico {
    constructor(type) {
        this.tipo = type
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.tipo} já está ligado.`)
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.tipo} já está desligado.`)
            return
        }
        this.ligado = false
    }
}

// const dispositivo1 = new Eletronico('Smartphone')
// dispositivo1.ligar()
// dispositivo1.ligar()
// dispositivo1.desligar()
// dispositivo1.desligar()
// console.log(dispositivo1)

class Smartphone extends Eletronico {
    constructor(type, color, model) {
        super(type) // Recebe da classe pai, caso passe vazio, valores dependentes de parâmetro ficam undefined
        // Atributos específicos da classe filha
        this.cor = color
        this.model = model
    }
}

const smartphone1 = new Smartphone('Xiaomi', 'Preto', 'Note 8')
console.log(smartphone1)

// Importante: não extender demais as heranças pra que o código não fique "emaranhado" e complexo demais, dificultando identificação e resolução de bugs

class Laptop extends Eletronico {
    constructor(type, color, model, processer) {
        super(type)

        this.cor = color
        this.modelo = model
        this.processador = processer
        this.aberto = false
    }

    abrir() {
        if (this.aberto) {
            console.log(`${this.tipo} ${this.modelo} já está aberto.`)
        }
        this.aberto = true
    }

    fechar() {
        if (!this.aberto) {
            console.log(`${this.tipo} ${this.modelo} já está fechado.`)
        }
        this.aberto = false
    }
}

const notebook = new Laptop('Dell', 'Cinza', 'G15', 'i5')

notebook.abrir()
notebook.abrir()
notebook.fechar()
notebook.fechar()

console.log(notebook)