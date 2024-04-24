class People {
    constructor (nome, sobrenome) {
        this.name = nome
        this.surname = sobrenome
    }
    
    talk() {
        console.log(`${this.name} está falando.`)
    }

    eat() {
        console.log(`${this.name} está comendo.`)
    }

    sleeping() {
        console.log(`${this.name} está dormindo.`)
    }

}

const p1 = new People('Pietra', 'Renata')
p1.eat()

function anotherPeople(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

anotherPeople.prototype.talk = function() {
    console.log(`${this.nome} está falando.`)
}

const p2 = new anotherPeople('Vincenzo', 'Roberto', 26)
p2.talk()