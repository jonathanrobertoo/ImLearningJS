function Produto(name, value) {
    this.nome = name
    this.valor = value
}

Produto.prototype.descontar = function(percent) {
    this.valor = this.valor - (this.valor * (percent / 100))
}

Produto.prototype.aumentar = function(percent) {
    this.valor = this.valor + (this.valor * (percent / 100))
}


const produto1 = new Produto('Camiseta', 90)

console.log(produto1.nome)
console.log(produto1.valor)
produto1.descontar(50)
console.log(produto1.valor)

const produto2 = {
    nome: 'Caneca',
    valor: 50
}

Object.setPrototypeOf(produto2, Produto.prototype)

produto2.aumentar(100)
console.log(produto2)