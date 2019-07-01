console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3] + ': erro')

//metodo push () addicionar elementos
aprovados [3] = 'Samuel'
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados[3])
console.log(aprovados[4])

aprovados [9] = 'Manoel'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()// alteração no array em ordem alfabetica 
console.log(aprovados)

delete aprovados [1] //deleta o campo mais não excluir o 1 fica undefined
console.log(aprovados[1])
console.log(aprovados[2])

/// metodo splice voce pode add e excluir o elemento indeice começa com o  0 

aprovados1 = ['d', 'b', 'a', 'u']
aprovados1.splice(1, 1)// ele vai trabalha no elemnto 1 e irá excluir o elemento 1
console.log(aprovados1)

aprovados2 = ['d', 'b', 'a', 'u']
aprovados2.splice(1, 2)// ele vai trabalha no elemnto 1 e irá excluir o elementos apartir do 'b'
console.log(aprovados2)

aprovados3 = ['d', 'b', 'a', 'u']
aprovados3.splice(1, 1, 'inserir f')// ele vai trabalha no elemnto 1 e excluir o elemento 1 irá inserir apartir do elemento 1
console.log(aprovados3)

aprovados4 = ['d', 'b', 'a', 'u']
aprovados4.splice(1, 0, 'inserir f')// ele vai trabalha no elemnto 1 e irá inserir apartir do elemento 1
console.log(aprovados4)