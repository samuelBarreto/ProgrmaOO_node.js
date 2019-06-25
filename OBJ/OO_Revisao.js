// coleção dinâmica pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto '] = 'Gerenerica'
produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89900,
    proprietario: {
        nome:'Samuel',
        idae: 21,
        endereco: {
            lorgradouro: 'rua abc',
            numero: 123
        }
    },
    condutores : [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 39
    }]

}
//pode acessar os obj pelo .
carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores

console.log(carro)