const aprovados = ['Agatha', 'Atido', 'Daniel', 'Requel']

aprovados.forEach(function(nome , indece){
    console.log(`${indece + 1}) ${nome}`)
})

aprovados.forEach(function(nome , indece, array, x){
    console.log(`${indece + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

