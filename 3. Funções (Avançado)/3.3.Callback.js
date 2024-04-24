// Callback simulando tempos de execução aleatórios
function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1 (callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand())
}

function f2 (callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())
}

function f3 (callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

// Execução das funções sem callback, ou seja, em ordem aleatória
// f1()
// f2()
// f3()

// Callback utilizando função anônima pra manter a ordem (CallbackHell, não recomendado)
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá, mundo!')
//         })
//     })
// })

// Callback clean code
f1(f1Callback) // Chamando a função f1 passando a função f1Callback como parâmetro

function f1Callback() {
    f2(f2Callback) // Função que chama f2 passando a função f2Callback como parâmetro
}

function f2Callback() {
    f3(f3Callback); // Função que chama f3 passando a função f3Callback como parâmetro
}
  
  function f3Callback() {
    console.log('Olá, mundo!'); // Função que exibe uma mensagem
}

// Exemplo baixado
// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) +
//       min;
//     return Math.floor(num);
//   }
  
//   function f1(callback) {
//     setTimeout(function() {
//       console.log('f1');
//       if (callback) callback();
//     }, rand());
//   }
  
//   function f2(callback) {
//     setTimeout(function() {
//       console.log('f2');
//       if (callback) callback();
//     }, rand());
//   }
  
//   function f3(callback) {
//     setTimeout(function() {
//       console.log('f3');
//       if (callback) callback();
//     }, rand());
//   }
  
//   f1(f1Callback);
  
//   function f1Callback() {
//     f2(f2Callback);
//   }
  
//   function f2Callback() {
//     f3(f3Callback);
//   }
  
//   function f3Callback() {
//     console.log('Olá mundo!');
//   }