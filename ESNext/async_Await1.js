function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Vishhhh')
        }, tempo)
    })
}

// esperarPor()
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1500)
    })
}

async function executar() {
    let valor = await retornarValor()
    await retornarValor()
    console.log(`Async/Await ${valor}...`)
    await retornarValor()
    console.log(`Async/Await ${valor + 1}...`)
      await retornarValor()
    console.log(`Async/Await ${valor + 2}...`)
    
    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

executar()
    .then(console.log)