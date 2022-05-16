function quemCresceMais(alturaAtualc1, alturaAtualc2, taxaDeCrescimentoc1, taxaDeCrescimentoc2) {
    let anosNecessarios = 0
    if ((alturaAtualc1 <= alturaAtualc2) && (taxaDeCrescimentoc1 > taxaDeCrescimentoc2)) {
        while (alturaAtualc1 <= alturaAtualc2) {
            alturaAtualc1 = alturaAtualc1 + taxaDeCrescimentoc1
            alturaAtualc2 = alturaAtualc2 + taxaDeCrescimentoc2
            anosNecessarios++
        }
        return `A criança 1 ultrapassara a criança 2 em ${anosNecessarios} ano(s)`
    } else if ((alturaAtualc1 >= alturaAtualc2) && (taxaDeCrescimentoc1 < taxaDeCrescimentoc2)){
        while (alturaAtualc2 <= alturaAtualc1) {
            alturaAtualc1 = alturaAtualc1 + taxaDeCrescimentoc1
            alturaAtualc2 = alturaAtualc2 + taxaDeCrescimentoc2
            anosNecessarios++
        }
        return `A criança 2 ultrapassara a criança 1 em ${anosNecessarios} ano(s)`
    } else if ((alturaAtualc1 < alturaAtualc2) && (taxaDeCrescimentoc1 < taxaDeCrescimentoc2)) {
        return 'A criança 1 nunca ultrapassara a criança 2!'
    } else if ((alturaAtualc1 > alturaAtualc2) && (taxaDeCrescimentoc1 > taxaDeCrescimentoc2)) {
        return 'A criança 2 nunca ultrapassara a criança 1!'
    } else {
        return 'Erro na entrada de valores'
    }
}

console.log(quemCresceMais(120, 130, 1, 2))
console.log(quemCresceMais(130, 130, 1, 2))
console.log(quemCresceMais(130, 110, 1, 2))
console.log(quemCresceMais(120, 130, 2, 1))
console.log(quemCresceMais(110, 130, 2, 1))