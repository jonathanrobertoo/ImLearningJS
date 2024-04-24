// Factory function (Função fábrica): retorna objetos
function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
  
      // Getter: simular atributo do objeto
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter: simular atributo do objeto
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  // Instanciando objetos a partir da factory
  const p1 = criaPessoa('Jonathan', 'Roberto', 1.78, 87);
  const p2 = criaPessoa('Vincenzo', 'Roberto', 1.83, 100);
  const p3 = criaPessoa('Daniele', 'Pavesi', 1.71, 70);
  
  console.log(`O IMC do ${p1.nome}, é: ${p1.imc}`);
  console.log(p2.nome, p2.imc);
  console.log(p3.nome, p3.imc);