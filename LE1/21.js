function planoDeSaude(idade) {
    if (idade < 10) {
        valor = 180
    } else if ((idade >= 10) && (idade <= 30)) {
        valor = 150
    } else if ((idade > 30) && (idade <= 60)) {
        valor = 195
    } else if (idade > 60) {
        valor = 230
    }
    return `O plano fica no valor de R$${valor.toFixed(2).replace('.', ',')} reais.`
}

console.log(planoDeSaude(70))
console.log(planoDeSaude(7))
console.log(planoDeSaude(37))
console.log(planoDeSaude(27))