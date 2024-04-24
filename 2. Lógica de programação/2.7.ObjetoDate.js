const data = new Date();
const numeroDia = new Date().getDay();
const diaDaSemana = converterDiaSemana(numeroDia);

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function converterDiaSemana(numeroDia) {
    if (numeroDia === 0) {
        return 'Domingo';
    } else if (numeroDia === 1) {
        return 'Segunda-feira';
    } else if (numeroDia === 2) {
        return 'Terça-feira';
    } else if (numeroDia === 3) {
        return 'Quarta-feira';
    } else if (numeroDia === 4) {
        return 'Quinta-feira';
    } else if (numeroDia === 5) {
        return 'Sexta-feira';
    } else if (numeroDia === 6) {
        return 'Sábado';
    } else {
        return 'Dia inválido';
    }
}

console.log(`Hoje é ${converterDiaSemana(numeroDia)}, ${formataData(data)}`);


/* 
function converterDiaSemana(numeroDia) {
    switch (numeroDia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            return 'Dia inválido';
    }
}

var numeroDia = new Date().getDay();
var diaDaSemana = converterDiaSemana(numeroDia);
console.log('Hoje é ' + diaDaSemana);
*/