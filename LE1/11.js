function eAnoBissexto(a) {
    let b = ((a % 4) == 0)
    if (b == true) {
        console.log(`De ${a} em ${a} anos é ano bissexto`)
    } else {
        console.log(`De ${a} em ${a} anos não é ano bissexto`)
    }
} 

eAnoBissexto(5)
eAnoBissexto(12)
eAnoBissexto(4000)
eAnoBissexto(4001)