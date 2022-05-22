const inverso = function(n) {
    let isANumber = typeof(n)
    if (n === true) {
        return console.log(false)
    } else if (n === false) {
        return console.log(true)
    } else if (isANumber == "number") {
        return console.log(n * -1)
    } else {
        return console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof(n)}!`)
    }
}

inverso(true)
inverso(false)
inverso(45)
inverso(-45)
inverso('Terminei')