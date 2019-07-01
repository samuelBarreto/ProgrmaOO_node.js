const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]

//retornar um arry apenas com os preços
const paraObj = json => JSON.parse(json)
let apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObj)//.map(apenasPreco)
console.log(resultado)
const resultado1 = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado1)