console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

reprovados = ['José', 'João', 'Maria']
console.log(reprovados[0])
console.log(reprovados[1])
console.log(reprovados[2])
console.log(reprovados[3])

reprovados[3] = 'Paulo'
console.log(reprovados[3])
reprovados.push('Kia')
console.log(reprovados[4])
console.log(reprovados.length)

reprovados[8] = 'Junin'
console.log(reprovados.length)
console.log(reprovados[7] === undefined)

console.log(reprovados)

reprovados.sort()
console.log(reprovados)

delete reprovados[1]
console.log(reprovados[1])
console.log(reprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)