const dev = {  // Criando objeto simples
    nome: 'Jonathan', // Utilizar vígula simples ao invés de ponto e vírgula para atributos
    sobrenome: 'Roberto',
    idade: 29,
    nível: 'júnior',

    fala() { // Método: função dentro desse objeto
        console.log(`A minha idade atual é ${this.idade}.`); // A palavra 'this' indica o contexto específico do objeto
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(dev.nome, dev.nível)
dev.fala();
dev.incrementaIdade();
dev.fala();