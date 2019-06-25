class lacamentos {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lacamentos =[]
    }

    addLancamentos (...lacamentos) {
    
        lacamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario () {
         let valorConsolidado = 0 
         this.lacamentos.forEach(l => {
             valorConsolidado += l.valor
         })
         return valorConsolidado
        
    }
}

const salario = new lacamentos ('Salario:', 4500)
const contaDeLuiz = new lacamentos('Luiz', - 100)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuiz)
console.log(contas.sumario())