// IIFE: Immediately invoked function expression
(function(idade, peso, altura) { // Envolver função entre parênteses para não atingir o escopo global
    
    const sobrenome = 'Roberto'
    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }

    function falaNome() {
        console.log(criaNome('Jonathan'))
    }

    falaNome()

    console.log(idade, peso, altura)

})(29, 86, 178); // Chamando a função, logo após o fechamento de parentêses, passando os parâmetros

(function sayHi() {
    console.log('Hi!')
})();

const nome = 'Está no escopo global, então não irá aparecer no console'