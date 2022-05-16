function retirarComOMinimoDeCedulas(saque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    while (saque >= 100) {
        saque = saque - 100
        contador100++
    }
    while (saque >= 50) {
        saque = saque - 50
        contador50++
    }
    while (saque >= 10) {
        saque = saque - 10
        contador10++
    }
    while (saque >= 5) {
        saque = saque - 5
        contador5++
    }
    while (saque >= 1) {
        saque = saque - 1
        contador1++
    }

    let c100 = contador100
    let c50 = contador50
    let c10 = contador10
    let c5 = contador5
    let c1 = contador1
    let resultado = ''

    if (c100 >= 1) {
        resultado += `${contador100} nota(s) de R$ 100. `
        c100 = 0
    } 
    if (c50 >= 1) {
        resultado += `${contador50} nota(s) de R$ 50. `
        c50 = 0
    }
    if (c10 >= 1) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }
    if (c5 >= 1) {
        resultado += `${contador5} nota(s) de R$ 5. `
        c5 = 0
    }
    if (c1 >= 1) {
        resultado += `${contador1} nota(s) de R$ 1. `
        c1 > 0
    }
    return resultado
}

console.log(retirarComOMinimoDeCedulas(189))