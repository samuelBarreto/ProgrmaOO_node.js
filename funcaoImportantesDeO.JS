const pessoa = {
    nome :'Ana',
    idade: 2,
    peso: 56
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNacimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNacimento = '01/02/2020'
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

//Object.assin {ECMAscript 2015}
const des= {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a :4}
const obj = Object.assign(des, o1, o2)
console.log(obj)
Object.freeze(obj)
obj.c =1234
console.log(obj)