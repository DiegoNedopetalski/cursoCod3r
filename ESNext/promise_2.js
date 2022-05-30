
// setTimeout(function() {
//     console.log('Executando callback...')
    
//     setTimeout(function () {
//         console.log('Executando callback...')
        
//         setTimeout(function () {
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Vishhhh')
        }, tempo)
        console.log('Executando promise...')
    })
}


esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(console.log)