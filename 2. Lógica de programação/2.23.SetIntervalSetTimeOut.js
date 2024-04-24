function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

// function horaBr() {
//     console.log(mostraHora());
// }

// setInterval(horaBr, 10000);

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 10000);