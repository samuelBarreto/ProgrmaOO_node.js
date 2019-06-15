//pessoa a ponta -> 123 a ponsta -> {...}
const pessoa = {nome : 'Samuel'}
pessoa.nome = 'João'
console.log(pessoa)

//pessoa vai recebe <- 456 e receba -> (...)
//pessoa = {nome : 'Ana'}

Object.freeze(pessoa)//congelo o objeto pessoa
pessoa.nome = 'Maria'
console.log(pessoa.nome)