const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // add primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // remove no índice n, n elementos, nesse caso, índice 3, 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array com todos os elementos a partir do índice n.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array com os elementos a partir do índice n até o índice (n - 1)
console.log(algunsPilotos2)