function sistemaDeNotas(a) {
    let b = a
    while (b % 5 != 0) {
        b ++
    }

    if (a < 38) {
        return console.log(`Aluno reprovado com nota ${a}!`)
    } else if ((a > 37) && (a <= 100))  {
        if ((b - a) < 3) {
            return console.log(`Aluno aprovado com nota ${b}!`)
        } else {
            return console.log(`Aluno aprovado com nota ${a}!`)
        }
    }
}

sistemaDeNotas(100)
sistemaDeNotas(30)
sistemaDeNotas(27)
sistemaDeNotas(88)
sistemaDeNotas(61)