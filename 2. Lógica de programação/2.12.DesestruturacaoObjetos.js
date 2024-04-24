// Atribuição via desestruturação em Objeto

const cidadao = {
    nome: `Jonathan`,
    sobrenome: `Roberto`,
    idade: 29,
    endereco: {
        rua: `Antonio Sebastiao Garcia Lopes`,
        numero: 344,
        bairro: `Jardim das Cerejeiras`,
        cidade: `Atibaia`,
        estado: `Sao Paulo`,
        pais: `Brasil`
    }
};

const { nome: fulano, sobrenome, idade, estadoCivil = `Não informado`, endereco }  = cidadao;

console.log(endereco);