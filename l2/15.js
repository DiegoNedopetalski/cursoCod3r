function checarAnoBissexto(ano) {
    const divisivelPor4 = ano % 4 == 0
    const divisivelPor100 = ano % 100 == 0
    const divisivelPor400 = ano % 400 == 0
    if (divisivelPor4 == true && divisivelPor100 != true || divisivelPor400 == true) {
        return console.log('É bissexto')
    } else {
        return console.log('Não é bissexto')
    }
}

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias

function checarAnoBissexto2(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto2(2020)) // retornará true
console.log(checarAnoBissexto2(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
