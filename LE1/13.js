function diaDaSemana(a){
    switch (a) {
        case 7: console.log('Fim de semana')
        break
        case 6: case 5: case 4: case 3: case 2: console.log('Dia útil') 
        break
        case 1: console.log('Fim de semana')
        break
        default: console.log('Dia inválido')         

    }
}

diaDaSemana(1)
diaDaSemana(7)
diaDaSemana(6)
diaDaSemana(5)
diaDaSemana(8)
