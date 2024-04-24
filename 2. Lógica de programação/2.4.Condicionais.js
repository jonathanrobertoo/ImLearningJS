let tenhoGrana = false;
let climaEnsolarado = false;

if (tenhoGrana && climaEnsolarado) {
    console.log('Darei um rolê');
} else if (tenhoGrana && !climaEnsolarado) {
    console.log('Vou pedir delivery');
} else if (!tenhoGrana && climaEnsolarado){
    console.log('Banho de sol');
} else {
    console.log('Hoje realmente tá foda')
}
