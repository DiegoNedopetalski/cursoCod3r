const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log(pessoa)

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    value: '01/01/2019',
    writable: true
    
});

pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
Object.assign(dest, o1, o2,)
console.log(dest)

const obj = dest;

Object.freeze(obj)
obj.c = 469865
console.log(obj)
