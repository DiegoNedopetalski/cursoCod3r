function jurusAnuidade(mes, valor) {
    let valorComJuros = valor * (1 + (5 / 100)) ** mes
    let mesRetorno = ''
    switch (mes) {
        case 12: 
            mesRetorno += 'dezembro'
            break
        case 11:
            mesRetorno += 'novembro'
            break
        case 10:
            mesRetorno += 'outubro'
            break
        case 9:
            mesRetorno += 'setembro'
            break
        case 8:
            mesRetorno += 'agosto'
            break
        case 7:
            mesRetorno += 'julho'
            break
        case 6:
            mesRetorno += 'junho'
            break
        case 5:
            mesRetorno += 'maio'
            break
        case 4:
            mesRetorno += 'abril'
            break
        case 3:
            mesRetorno += 'março'
            break
        case 2:
            mesRetorno += 'fevereiro'
            break
        case 1:
            mesRetorno += 'janeiro'
            break
        default: return 'Mês invalido!'
    }
    return `Se você pagar no mês ${mesRetorno}, o total de sua anuidade fica R$${valorComJuros.toFixed(2).replace('.', ',')} reais.`
}

console.log(jurusAnuidade(10, 1500))

