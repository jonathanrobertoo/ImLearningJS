let número = prompt(`Digite um número:`); // Criamos uma variável para armazenar o número digitado pelo usuário com o prompt.
número = Number(número); /* Como a variável 'número' é um let, podemos convertê-la em número com Number.
Outra maneira seria usar um const número = Number(prompt(`Digite um número:`)), convertendo diretamente. */

let numeroTitulo = document.getElementById(`numero-titulo`); // Criamos a variável para armazenar o id referenciado no arquivo html como 'numero-titulo'.

let texto = document.getElementById(`texto`); // Criamos a variável para armazenar o id referenciado no arquivo html como 'texto'.

numeroTitulo.innerHTML = número // A variável 'numeroTitulo' com a propriedade innerHTML (utilizada para fazer alteração no elemento inserido) recebe o input do usuário já convertido pro tipo number.

texto.innerHTML = ''; // Para zerar o placeholder, atribuímos uma string vazia. Variável 'texto' recebe as operações requeridas abaixo.
texto.innerHTML += `<p>Raiz quadrada: ${número * 0.5}.</p>`; // Importante utilizar o sinal '+' ao invés de apenas '=', para que o valor anterior não seja sobrescrito pelos demais.
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(número)}.</p>`; // A variável 'número' utiliza o método do constructor Number para validação de inteiro.
texto.innerHTML += `<p>É NaN: ${Number.isNaN(número)}.</p>`; // A variável 'número' utiliza o método do constructor Number para validação de NaN.
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(número)}.</p>`; // A variável 'número' utiliza o método do objeto Math para operação de arredondamento para baixo.
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(número)}.</p>`; // A variável 'número' utiliza o método do objeto Math para operação de arredondamento para cima.
texto.innerHTML += `<p>Com duas casas decimais: ${(número.toFixed(2))}.</p>`; // // A variável 'número' utiliza a propriedade para operação de arredondamento para duas casas decimais ao passar o parâmetro '2'.
