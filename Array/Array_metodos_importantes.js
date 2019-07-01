const pilotos = [ 'Vettel', ' Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// massa quebrou o carro! metodo remove o ultimo elemnto da ultimo posição
console.log(pilotos)

pilotos.push('Verstappen')// adiciona um elemento no final do Array
console.log(pilotos)

pilotos.shift()//remove o elemento da primeira posição igual o pop()
console.log(pilotos)

pilotos.unshift('Hamilton')//adicionar um elemento na primeira poisção do Array 
console.log(pilotos)

//splice pode adicionar e remove elemento no arrray

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // antes do raikkonen vou adicionar os elementos em questão
console.log(pilotos)

//remover
pilotos.splice(3,1)// massa remove :(
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)// novo Array apartir do indece 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // o indece 4 não pode entra 
console.log(algunsPilotos2)