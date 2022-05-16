function identificaPares() {
    let contador = 1
    let contadorDePares = 0
    while (contador <= 100) {
        if ((contador % 2) == 0) {
        contadorDePares++
        }
    contador++
    }
    return console.log(contadorDePares)
}

identificaPares()