function fatorial(a){
    let resultado = 1
    if (a >= 1) {
        while (a != 1) {
            resultado = resultado * a
            a--
        }
    }
    return console.log(resultado)
}

fatorial(0)