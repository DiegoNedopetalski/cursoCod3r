function funcaoDaSorte(numero) {
    const numeroSorteado = (Math.random() * 10).toFixed(0)
    if (numero == numeroSorteado) {
        return console.log(`Parabéns! O número sorteado foi o ${numeroSorteado
        }` )
    } else {
        return console.log(`Que pena! O número sorteado foi o ${numeroSorteado}`)
    }
}

funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"

function funcaoDaSorte2(numero) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return (numero == numeroAleatorio ? `Parabéns! O número sorteado foi o ${numeroAleatorio}` : `Que Pena! O número sorteado foi o ${numeroAleatorio}`)
}

console.log(funcaoDaSorte2(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte2(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte2(5)) // retornará "Que pena! O número sorteado foi o 1"