function reajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            salarioFinal = salarioAtual + (0.1 * salarioAtual) 
            break
        case 'B':
            salarioFinal = salarioAtual + (0.15 * salarioAtual)
            break
        case 'C':
            salarioFinal = salarioAtual + (0.2 * salarioAtual)
            break
        default: return console.log('Plano não registrado!')
    }
    console.log(`O salário foi reajustado de R$${salarioAtual.toFixed(2).replace('.', ',')} para R$${salarioFinal.toFixed(2).replace('.', ',')}`)
}

reajuste('A', 1200)
reajuste('B', 1200)
reajuste('C', 1200)
reajuste('D', 1200)