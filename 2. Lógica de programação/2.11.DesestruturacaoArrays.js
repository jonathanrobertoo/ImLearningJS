// Atribuição via desestruturação em Array

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [primeiro, segundo, terceiro, , quinto, sexto, ...sobra] = numeros;

const famílias = [[`enzo`, `claudia`, `pietra`, `vincenzo`], [`antonio`, `sonia`, `gabriele`], [`jonathan`, `daniele`]];

const [roberto, pavesi, nós] = famílias;

//console.log(nós[0]);
