const familiaJonathan = [`Enzo`, `Cláudia`, `Pietra`, `Vincenzo`, `Daniele`, `Dalila`, `Sônia`, `Antônio`, `Gabriele`, `Marina`, `Marcon`, `Cristina`, `Vitor`, `Henrique`, `William`, `Angélica`];
const parente = familiaJonathan[0];

function relativeJonathan(parente) {
    let parentesco;

    switch (parente) {
        case `Enzo`:
            parentesco = `Pai`;
            return parentesco;
        case `Cláudia`:
            parentesco = `Mãe`
            return parentesco;
    }
}

console.log(relativeJonathan(parente))