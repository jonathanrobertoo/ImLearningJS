// Função recursiva: chama a si mesma

function recursiva(max) {
    if (max >= 10) return
    max++
    console.log(max)
    recursiva(max)
}

recursiva(-10)