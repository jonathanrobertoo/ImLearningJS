// Constructor function (Função construtora): retorna objetos
// Convenção: constructors sempre usamos a primeira letra maiúscula
// Utiliza 'New' para gerar novos objetos, sem a necessidade do return

function Pessoa(name, surname) {
    
    // Atributos privados: não estão disponíveis fora do corpo do objeto
    const ID = 39548610892
    const metodoInterno = () => {
        console.log('Esse método é privado e não é acessível fora da função')
    }

    // Atributos públicos: acessíveis fora do corpo do objeto (this)
    this.nome = name
    this.sobrenome = surname
    this.fala = () => {
        console.log(`Olá, meu nome é ${this.nome}`) // Sem o 'this' seria 'Jonathan'
    }
}

const p1 = new Pessoa('Daniele', 'Pavesi')
console.log(p1.nome)

const nome = 'Jonathan'
p1.fala()